import { Book, Loan } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RecentActivityProps {
  title: string;
  activities: Array<Book | Loan>;
  type: 'books' | 'loans';
}

export function RecentActivity({ title, activities, type }: RecentActivityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={type === 'books' ? (activity as Book).book_id : (activity as Loan).loan_id} className="flex items-center">
              {type === 'books' ? (
                <>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{(activity as Book).title}</p>
                    <p className="text-sm text-gray-500">{(activity as Book).publisher}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Book ID: {(activity as Loan).book_id}
                    </p>
                    <p className="text-sm text-gray-500">
                      User ID: {(activity as Loan).user_id}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}