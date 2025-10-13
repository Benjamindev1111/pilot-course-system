/**
 * 🧭 Navbar 組件
 * 
 * 導航列組件
 * 學習重點：
 * 1. React Router 的 Link 和 useLocation
 * 2. 條件渲染（根據登入狀態顯示不同內容）
 * 3. 響應式導航（手機版漢堡選單）
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

/**
 * Navbar 組件
 */
export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // TODO: 之後會從狀態管理中取得登入狀態
  const isLoggedIn = false;

  // 導航項目配置
  const navItems = [
    { path: '/', label: '首頁' },
    { path: '/courses', label: '課程預定管理' },
    { path: '/activities', label: '儀器練習與活動預約' },
    { path: '/my-bookings', label: '我的預約' },
  ];

  // 判斷當前頁面是否為活動項目
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">FTTW</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium
                  transition-colors duration-200
                  ${isActive(item.path)
                    ? 'bg-primary-800 text-white'
                    : 'text-primary-100 hover:bg-primary-600'
                  }
                `.trim().replace(/\s+/g, ' ')}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side - User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Link
                to="/account"
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-primary-600 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>帳戶</span>
              </Link>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
                >
                  登入
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-white text-primary-700 rounded-md hover:bg-gray-100 transition-colors font-medium"
                >
                  註冊
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-primary-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  block px-3 py-2 rounded-md text-base font-medium
                  ${isActive(item.path)
                    ? 'bg-primary-800 text-white'
                    : 'text-primary-100 hover:bg-primary-600'
                  }
                `.trim().replace(/\s+/g, ' ')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-primary-600">
              {isLoggedIn ? (
                <Link
                  to="/account"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  帳戶管理
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    登入
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 mt-2 bg-white text-primary-700 rounded-md font-medium text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    註冊
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

