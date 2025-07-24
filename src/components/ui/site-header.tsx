'use client';

import React from 'react';
import { Bell, Search, User, Settings } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg border-b border-gray-700/50 backdrop-blur-xl">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-200" />
              <input
                type="search"
                placeholder="Search anything..."
                className="pl-10 pr-4 py-3 w-80 bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-200 backdrop-blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Settings button */}
            <button className="p-3 hover:bg-gray-700/50 rounded-xl relative transition-all duration-200 group">
              <Settings className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-gray-300/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </button>

            {/* Notifications */}
            <button className="p-3 hover:bg-gray-700/50 rounded-xl relative transition-all duration-200 group">
              <Bell className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">3</span>
              </span>
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
            </button>

            <div className="flex items-center gap-3 bg-gray-700/30 rounded-xl p-2 hover:bg-gray-700/50 transition-all duration-200 cursor-pointer group relative">
              {/* Online status indicator */}
              <div className="absolute -top-1 -right-1 z-10">
                <div className="relative">
                  <div className="h-4 w-4 bg-green-500 rounded-full border-2 border-gray-800 shadow-sm"></div>
                  <div className="absolute inset-0 h-4 w-4 bg-green-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute inset-0 h-4 w-4 bg-green-300 rounded-full animate-pulse opacity-40"></div>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">John Smith</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
              <button className="p-1 hover:bg-gray-600/50 rounded-full transition-all duration-200 group-hover:scale-105">
                <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <User className="h-5 w-5 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}