'use server';

import { v4 as uuidv4 } from 'uuid';
import * as z from 'zod';
import { redis } from '@/lib/redis'; // <-- Make sure this file exists

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  college: z.string().min(3, { message: "College name is required." }),
  photo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export async function saveRegistration(data: FormData) {
  try {
    const validation = formSchema.safeParse(data);
    if (!validation.success) {
      console.error("Server-side validation failed:", validation.error.flatten());
      return { success: false, message: 'Invalid form data provided.' };
    }

    const { name, email, phone, college } = validation.data;
    const id = uuidv4(); // Unique ID for storage

    const registrationEntry = {
      id,
      name,
      email,
      phone,
      college,
      createdAt: new Date().toISOString(),
    };

    await redis.hset(`registration:${id}`, registrationEntry);

    return {
      success: true,
      message: 'Registration saved successfully.',
      // You can optionally return `id` or use it to generate a ticket
    };
  } catch (error) {
    console.error('Failed to save registration:', error);
    return {
      success: false,
      message: 'An error occurred while saving your registration. Please try again.',
    };
  }
}
