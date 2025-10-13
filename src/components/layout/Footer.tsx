/**
 * 🦶 Footer 組件
 * 
 * 頁尾組件
 */

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer 組件
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 關於我們 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">FTTW 機師選課系統</h3>
            <p className="text-sm">
              提供專業的飛行訓練課程，協助您實現飛行夢想。
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  課程預定
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-white transition-colors">
                  儀器練習
                </Link>
              </li>
              <li>
                <Link to="/my-bookings" className="hover:text-white transition-colors">
                  我的預約
                </Link>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">聯絡我們</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 fttw@example.com</li>
              <li>📞 (02) 1234-5678</li>
              <li>📍 台北市中正區Example路100號</li>
            </ul>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>© {currentYear} FTTW. 版權所有 THINBOOK 作品集</p>
        </div>
      </div>
    </footer>
  );
};

