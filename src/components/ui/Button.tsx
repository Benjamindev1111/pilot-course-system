/**
 * 🔘 Button 組件
 * 
 * 這是一個可重用的按鈕組件
 * 學習重點：
 * 1. React 組件的基本結構
 * 2. Props 的使用（傳遞參數給組件）
 * 3. TypeScript 介面定義
 * 4. Tailwind CSS 的樣式應用
 */

import React from 'react';

/**
 * Button 組件的 Props 介面
 * 定義了這個組件可以接收哪些參數
 */
interface ButtonProps {
  children: React.ReactNode;  // 按鈕內的內容（文字或其他元素）
  onClick?: () => void;        // 點擊事件處理函數（選填）
  type?: 'button' | 'submit' | 'reset';  // HTML button 的 type 屬性
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';  // 按鈕樣式變體
  size?: 'sm' | 'md' | 'lg';   // 按鈕大小
  disabled?: boolean;          // 是否禁用
  fullWidth?: boolean;         // 是否佔滿整個寬度
  className?: string;          // 額外的 CSS 類別
}

/**
 * Button 組件
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  // 根據不同的 variant 設定不同的樣式
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  // 根據不同的 size 設定不同的尺寸
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // 組合所有的 CSS 類別
  const buttonClasses = `
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    rounded-lg font-medium transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

