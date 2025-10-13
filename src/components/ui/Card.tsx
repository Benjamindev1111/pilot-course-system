/**
 * 🎴 Card 組件
 * 
 * 卡片容器組件，用於包裹內容
 * 學習重點：
 * 1. 容器組件的設計
 * 2. children prop 的使用
 * 3. 組合式組件（Card.Header, Card.Body, Card.Footer）
 */

import React from 'react';

/**
 * Card 主組件 Props
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;  // 是否有 hover 效果
}

/**
 * CardHeader Props
 */
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * CardBody Props
 */
interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * CardFooter Props
 */
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card 主組件
 */
export const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
} = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-md overflow-hidden
        ${hover ? 'transition-shadow duration-200 hover:shadow-lg' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </div>
  );
};

/**
 * CardHeader 子組件
 */
const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

/**
 * CardBody 子組件
 */
const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

/**
 * CardFooter 子組件
 */
const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 border-t border-gray-200 bg-gray-50 ${className}`}>
      {children}
    </div>
  );
};

// 將子組件附加到主組件上
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

