'use client';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { bookApi, userApi, loanApi } from '@/lib/api';
import type { Loan, Book } from '@/lib/types';
import { useEffect, useState } from 'react';

interface DashboardStats {
  totalUsers: number;
  totalBooks: number;
  activeLoans: number;
  overdueLoans: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loans, setLoans] = useState<Loan[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [users, booksResponse, loansResponse] = await Promise.all([
          userApi.getAll(),
          bookApi.getAll(),
          loanApi.getAll(),
        ]);

        // Store the data in state
        setBooks(booksResponse.data);
        setLoans(loansResponse.data);

        setStats({
          totalUsers: users.data.length,
          totalBooks: booksResponse.data.length,
          activeLoans: loansResponse.data.filter((loan: Loan) => loan.status === 'active').length,
          overdueLoans: loansResponse.data.filter((loan: Loan) => loan.status === 'overdue').length,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !stats) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <StatsCards stats={stats} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivity
          title="Recent Loans"
          activities={loans.slice(0, 5)}
          type="loans"
        />
        <RecentActivity
          title="Recently Added Books"
          activities={books.slice(0, 5)}
          type="books"
        />
      </div>
    </div>
  );
}