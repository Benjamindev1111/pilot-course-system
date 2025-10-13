/**
 * 📝 Input 組件
 * 
 * 可重用的輸入框組件
 * 學習重點：
 * 1. forwardRef 的使用（讓父組件可以訪問 input 元素）
 * 2. 表單輸入的各種類型
 * 3. 錯誤狀態的處理
 */

import React, { forwardRef } from 'react';

/**
 * Input 組件的 Props 介面
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;          // 輸入框標籤
  error?: string;          // 錯誤訊息
  helperText?: string;     // 輔助說明文字
}

/**
 * Input 組件
 * 使用 forwardRef 讓這個組件可以被 React Hook Form 等表單庫使用
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {/* 標籤 */}
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        {/* 輸入框 */}
        <input
          ref={ref}
          className={`
            w-full px-4 py-2 border rounded-lg
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
            transition-colors duration-200
            ${error 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300'
            }
            ${props.disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
            ${className}
          `.trim().replace(/\s+/g, ' ')}
          {...props}
        />
        
        {/* 錯誤訊息 */}
        {error && (
          <p className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
        
        {/* 輔助說明 */}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

// 設定顯示名稱（用於 React DevTools）
Input.displayName = 'Input';

