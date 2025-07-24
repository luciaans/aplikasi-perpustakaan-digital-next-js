// src/app/books/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { BookList } from '@/components/ui/book-list';
import { bookApi } from '@/lib/api';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await bookApi.getAll();
        setBooks(response.data || []);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Books Management</h1>
      </div>
      <BookList books={books} />
    </div>
  );
}