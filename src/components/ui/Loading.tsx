/**
 * ⏳ Loading 組件
 * 
 * 載入動畫組件
 * 學習重點：
 * 1. CSS 動畫的使用
 * 2. 條件渲染
 */

import React from 'react';

/**
 * Loading Props
 */
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;  // 是否全螢幕顯示
  text?: string;         // 載入提示文字
}

/**
 * Loading 組件
 */
export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  fullScreen = false,
  text = '載入中...',
}) => {
  // 尺寸對應
  const sizeStyles = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4',
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`
          ${sizeStyles[size]}
          border-primary-600 border-t-transparent
          rounded-full animate-spin
        `.trim().replace(/\s+/g, ' ')}
      />
      {text && (
        <p className="text-gray-600 text-sm">{text}</p>
      )}
    </div>
  );

  // 全螢幕模式
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  // 一般模式
  return spinner;
};

