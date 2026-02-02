
import React, { useState, useEffect } from 'react';
import { supabase } from './supabase';
import { User } from './types';
import AdminLayout from './components/admin/AdminLayout';
import StudentLayout from './components/student/StudentLayout';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persistent session simulation
    const savedUser = localStorage.getItem('anbk_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Ensure page scrolls to top on login or logout
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [user]);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('anbk_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('anbk_user');
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen bg-blue-600 text-white font-bold">Memuat...</div>;
  }

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {(user.role === 'admin' || user.role === 'co-admin') ? (
        <AdminLayout user={user} onLogout={handleLogout} />
      ) : (
        <StudentLayout user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
