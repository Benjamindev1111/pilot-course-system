/**
 * 🏗️ Layout 組件
 * 
 * 主要版面配置組件
 * 學習重點：
 * 1. 版面配置的概念
 * 2. Outlet 的使用（React Router 的子路由出口）
 */

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

/**
 * Layout 組件
 * 包含導航列、內容區域和頁尾
 */
export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 導航列 */}
      <Navbar />
      
      {/* 主要內容區域 */}
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>
      
      {/* 頁尾 */}
      <Footer />
    </div>
  );
};

