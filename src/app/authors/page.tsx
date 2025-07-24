'use client';

import { useEffect, useState } from 'react';
import { AuthorList } from '@/components/ui/author-list';
import { authorApi } from '@/lib/api';

export default function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await authorApi.getAll();
        setAuthors(response.data || []);
      } catch (error) {
        console.error('Error fetching authors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Authors Management</h1>
      </div>
      <AuthorList authors={authors} />
    </div>
  );
}