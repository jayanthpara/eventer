'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import * as XLSX from 'xlsx';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

type Entry = {
  name: string;
  email: string;
  phone: string;
  college: string;
  [key: string]: string;
};

export default function AdminPanel() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const fetchEntries = async () => {
    const res = await fetch('/api/registrations');
    const data = await res.json();
    setEntries(data);
  };

  const handleLogin = () => {
    if (password === 'admin') {
      sessionStorage.setItem('admin-auth', 'true');
      setAuthenticated(true);
      fetchEntries();
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuthed = sessionStorage.getItem('admin-auth') === 'true';
      if (isAuthed) {
        setAuthenticated(true);
        fetchEntries();
      }
    }
  }, []);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(entries);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');
    XLSX.writeFile(workbook, 'registrations.xlsx');
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md p-6">
          <CardContent className="space-y-4">
            <h1 className="text-xl font-semibold">Admin Login</h1>
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
            />
            <Button onClick={handleLogin} className="w-full">Login</Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <Button onClick={exportToExcel}>Export to Excel</Button>
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="w-full table-auto border-collapse text-sm border border-gray-300 dark:border-gray-600">
          <thead className="bg-gray-200 dark:bg-gray-800 dark:text-white text-left">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">College</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                <td className="p-2 border text-gray-800 dark:text-white">{entry.name}</td>
                <td className="p-2 border text-gray-800 dark:text-white">{entry.email}</td>
                <td className="p-2 border text-gray-800 dark:text-white">{entry.phone}</td>
                <td className="p-2 border text-gray-800 dark:text-white">{entry.college}</td>
                <td className="p-2 border text-center">
                  <Button variant="destructive" size="sm" onClick={() => alert('Delete soon')}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
