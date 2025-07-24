'use client';

import { useEffect, useState } from 'react';
import { loanApi } from '@/lib/api';
import { Loan } from '@/lib/types';
import { LoanList } from '@/components/ui/loan-list';

export default function LoansPage() {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await loanApi.getAll();
        setLoans(response.data || []);
      } catch (error) {
        console.error('Error fetching loans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Loan Management</h1>
      </div>
      <LoanList loans={loans} />
    </div>
  );
}
