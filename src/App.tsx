/**
 * 🚀 App 主組件
 * 
 * 這是應用程式的入口組件
 * 學習重點：
 * 1. React Router 的設置
 * 2. 路由配置
 * 3. 巢狀路由（Layout 中的 Outlet）
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/Home';
import { LoginPage, RegisterPage } from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 有 Layout 的路由 */}
        <Route path="/" element={<Layout />}>
          {/* 首頁 */}
          <Route index element={<HomePage />} />
          
          {/* 課程相關頁面 - 之後會實作 */}
          <Route path="courses" element={<div className="container mx-auto px-4 py-8"><h1 className="text-2xl font-bold">課程預定管理（開發中）</h1></div>} />
          
          {/* 活動預約 - 之後會實作 */}
          <Route path="activities" element={<div className="container mx-auto px-4 py-8"><h1 className="text-2xl font-bold">儀器練習與活動預約（開發中）</h1></div>} />
          
          {/* 我的預約 - 之後會實作 */}
          <Route path="my-bookings" element={<div className="container mx-auto px-4 py-8"><h1 className="text-2xl font-bold">我的預約（開發中）</h1></div>} />
          
          {/* 個人帳戶 - 之後會實作 */}
          <Route path="account" element={<div className="container mx-auto px-4 py-8"><h1 className="text-2xl font-bold">個人帳戶（開發中）</h1></div>} />
        </Route>

        {/* 無 Layout 的路由（登入、註冊） */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* 404 頁面 */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-xl text-gray-600 mb-8">找不到此頁面</p>
              <a href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                返回首頁
              </a>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
