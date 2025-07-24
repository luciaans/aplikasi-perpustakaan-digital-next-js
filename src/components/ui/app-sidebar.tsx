'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Book, BookOpen, Home, Library, User, Users } from 'lucide-react';
import { LogoutButton } from '@/components/ui/logout-button';

export function AppSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Books', href: '/books', icon: Book },
    { name: 'Loans', href: '/loans', icon: BookOpen },
    { name: 'Users', href: '/users', icon: Users },
    { name: 'Authors', href: '/authors', icon: User },
    { name: 'Catalog', href: '/catalog', icon: Library },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white h-screen fixed flex flex-col border-r border-gray-700/50">
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
            <Library className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Digital Library
            </h1>
            <p className="text-xs text-gray-400">Management System</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6 flex-1">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/25'
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-r-full"></div>
                  )}
                  
                  <div className={`p-2 rounded-lg mr-3 ${
                    isActive ? 'bg-white/10' : 'group-hover:bg-gray-600/50'
                  } transition-colors duration-200`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout section at bottom */}
      <div className="p-4 border-t border-gray-700/50">
        <LogoutButton />
      </div>
    </aside>
  );
}