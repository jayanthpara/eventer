'use server';

import { promises as fs } from 'fs';
import path from 'path';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  college: z.string().min(3, { message: "College name is required." }),
  photo: z.string({ required_error: "A photo is required for the ID card." })
    .min(1, { message: "A photo is required for the ID card." }),
});

type FormData = z.infer<typeof formSchema>;

function escapeCsvField(field: string): string {
    if (/[",\n\r]/.test(field)) {
        return `"${field.replace(/"/g, '""')}"`;
    }
    return field;
}

export async function saveRegistration(data: FormData) {
  try {
    const validation = formSchema.safeParse(data);
    if (!validation.success) {
      console.error("Server-side validation failed:", validation.error.flatten());
      return { success: false, message: 'Invalid form data provided.' };
    }

    const { name, email, phone, college, photo } = validation.data;

    // Handle photo saving
    const base64Data = photo.split(',')[1];
    if (!base64Data) {
        return { success: false, message: 'Invalid photo data.' };
    }
    const photoBuffer = Buffer.from(base64Data, 'base64');
    const photoDir = path.join(process.cwd(), 'public', 'registrations');
    await fs.mkdir(photoDir, { recursive: true });
    const photoFilename = `${Date.now()}-${name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.jpg`;
    const photoPath = path.join(photoDir, photoFilename);
    await fs.writeFile(photoPath, photoBuffer);
    const savedPhotoUrl = `/registrations/${photoFilename}`;

    // Handle CSV saving
    const dataDir = path.join(process.cwd(), 'src', 'data');
    await fs.mkdir(dataDir, { recursive: true });
    const csvPath = path.join(dataDir, 'registrations.csv');
    const csvHeader = 'Name,Email,Phone,College,PhotoUrl\n';
    const csvRow = [
        escapeCsvField(name),
        escapeCsvField(email),
        escapeCsvField(phone),
        escapeCsvField(college),
        escapeCsvField(savedPhotoUrl)
    ].join(',') + '\n';
    
    try {
      await fs.access(csvPath);
    } catch {
      await fs.writeFile(csvPath, csvHeader, 'utf-8');
    }
    
    await fs.appendFile(csvPath, csvRow, 'utf-8');

    return { success: true, message: 'Registration saved successfully.', photoUrl: savedPhotoUrl };
  } catch (error) {
    console.error('Failed to save registration:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, message: `An error occurred while saving your registration: ${errorMessage}` };
  }
}
