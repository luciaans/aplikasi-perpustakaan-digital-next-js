'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/auth-provider';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (activeTab === 'register') {
      // Simulate register
      setTimeout(() => {
        setError('Registrasi berhasil! Silakan login.');
        setActiveTab('login');
        setIsLoading(false);
      }, 1500);
      return;
    }

    const success = await login(username, password);
    
    if (success) {
      // Redirect ke dashboard setelah login berhasil
      router.push('/dashboard');
    } else {
      setError('Username atau password salah');
    }
    
    setIsLoading(false);
  };

  const handleForgotPassword = () => {
    setError('Link reset password telah dikirim ke email Anda');
    setShowForgotPassword(false);
  };

  // Jika sudah login, redirect ke dashboard sudah ditangani di handleSubmit

  if (showForgotPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-md w-full mx-4">
          <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Lupa Password?</h2>
              <p className="text-gray-400">Masukkan email Anda untuk reset password</p>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="nama@email.com"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleForgotPassword}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Kirim Link Reset
              </button>

              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="w-full text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                ← Kembali ke login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-md w-full mx-4">
        <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Digital Library</h1>
            <p className="text-gray-400">Akses koleksi digital terbaik</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-gray-700/50 rounded-xl p-1 mb-6">
            <button
              type="button"
              onClick={() => {setActiveTab('login'); setError('');}}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'login'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Masuk
            </button>
            <button
              type="button"
              onClick={() => {setActiveTab('register'); setError('');}}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'register'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Daftar
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username/Email Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                {activeTab === 'register' ? 'Email' : 'Username'}
              </label>
              <div className="relative">
                <input
                  id="username"
                  name="username"
                  type={activeTab === 'register' ? 'email' : 'text'}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder={activeTab === 'register' ? 'nama@email.com' : 'Masukkan username'}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Additional fields for register */}
            {activeTab === 'register' && (
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-300 mb-2">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Confirm Password for register */}
            {activeTab === 'register' && (
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-2">
                  Konfirmasi Password
                </label>
                <div className="relative">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Konfirmasi password"
                  />
                </div>
              </div>
            )}

            {/* Forgot Password Link (only for login) */}
            {activeTab === 'login' && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Lupa password?
                </button>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  {activeTab === 'login' ? 'Masuk...' : 'Mendaftar...'}
                </div>
              ) : (
                activeTab === 'login' ? 'Masuk' : 'Daftar Akun'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Dengan {activeTab === 'login' ? 'masuk' : 'mendaftar'}, Anda menyetujui{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                Syarat & Ketentuan
              </a>{' '}
              kami
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}