/**
 * 🏠 首頁
 * 
 * 學習重點：
 * 1. 頁面組件的結構
 * 2. Hero Section 設計
 * 3. 響應式排版
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui';
import { Calendar, BookOpen, Plane } from 'lucide-react';

/**
 * HomePage 組件
 */
export const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/fftw-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* 內容區域 */}
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              對我登課程和使用有疑問嗎？
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              歡迎的常見Q&A都有來準備啦！
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => {}}>
                前往常見社群影音老師&加好友
              </Button>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="bg-white text-primary-700 border-white hover:bg-gray-100">
                  瀏覽課程
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 教室當月面授課表 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              教室當月面授課表
            </h2>
            <p className="text-gray-600">
              2025年08月 | 查看所有 | 北區地區實體
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-center text-gray-500">
              課程資訊載入中...
            </p>
            <div className="mt-6 text-center">
              <Link to="/courses">
                <Button>查看完整課表</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 功能介紹 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            主要功能
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 課程預定 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">課程預定管理</h3>
              <p className="text-gray-600 mb-4">
                查看課程行事曆，輕鬆預約您想上的課程。支援月曆、週曆和列表三種顯示模式。
              </p>
              <Link to="/courses" className="text-primary-600 hover:text-primary-700 font-medium">
                前往預定 →
              </Link>
            </div>

            {/* 儀器練習 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Plane className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">儀器練習與活動預約</h3>
              <p className="text-gray-600 mb-4">
                預約架上考古題、視力箱、大型模擬機、輕航機等練習活動。
              </p>
              <Link to="/activities" className="text-primary-600 hover:text-primary-700 font-medium">
                立即預約 →
              </Link>
            </div>

            {/* 我的預約 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">我的預約</h3>
              <p className="text-gray-600 mb-4">
                查看您的所有課程預約紀錄，並可進行課程回饋或取消預約。
              </p>
              <Link to="/my-bookings" className="text-primary-600 hover:text-primary-700 font-medium">
                查看預約 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            準備好開始您的飛行訓練了嗎？
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            立即註冊，開始預約課程
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
              立即註冊
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

