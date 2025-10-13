/**
 * 🪟 Modal 組件
 * 
 * 彈窗/對話框組件
 * 學習重點：
 * 1. Portal 的使用（將元素渲染到 DOM 樹之外）
 * 2. 事件處理（關閉彈窗）
 * 3. 鍵盤事件（ESC 鍵關閉）
 */

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

/**
 * Modal Props
 */
interface ModalProps {
  isOpen: boolean;              // 是否顯示
  onClose: () => void;          // 關閉處理函數
  title?: string;               // 標題
  children: React.ReactNode;    // 內容
  size?: 'sm' | 'md' | 'lg' | 'xl';  // 大小
  showCloseButton?: boolean;    // 是否顯示關閉按鈕
}

/**
 * Modal 組件
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
}) => {
  // 尺寸對應
  const sizeStyles = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  // 監聽 ESC 鍵
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // 防止背景滾動
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // 如果未開啟，不渲染任何內容
  if (!isOpen) return null;

  // 使用 Portal 將 Modal 渲染到 body 下
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}  // 點擊背景關閉
    >
      <div
        className={`
          ${sizeStyles[size]}
          w-full bg-white rounded-lg shadow-xl
          transform transition-all
        `.trim().replace(/\s+/g, ' ')}
        onClick={(e) => e.stopPropagation()}  // 防止點擊內容時關閉
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            {title && (
              <h3 className="text-lg font-semibold text-gray-900">
                {title}
              </h3>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

