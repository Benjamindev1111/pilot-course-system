/**
 * 🔐 登入頁面
 * 
 * 學習重點：
 * 1. React Hook Form 的使用
 * 2. 表單驗證
 * 3. 狀態管理
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input, Button, Card } from '../../components/ui';

/**
 * 登入表單資料介面
 */
interface LoginFormData {
  email: string;
  password: string;
}

/**
 * LoginPage 組件
 */
export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  // 使用 React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  /**
   * 表單提交處理
   */
  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError('');

    try {
      // TODO: 之後會串接真實的 API
      console.log('登入資料:', data);
      
      // 模擬 API 請求
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 登入成功後導航到首頁
      navigate('/');
    } catch (err) {
      setError('登入失敗，請檢查您的帳號和密碼');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card>
          <Card.Header>
            <h2 className="text-center text-3xl font-bold text-gray-900">
              登入
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              或{' '}
              <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500">
                建立新帳號
              </Link>
            </p>
          </Card.Header>

          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* 錯誤訊息 */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* 電子信箱 */}
              <Input
                label="電子信箱"
                type="email"
                placeholder="fttw@gmail.com"
                {...register('email', {
                  required: '請輸入電子信箱',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '請輸入有效的電子信箱',
                  },
                })}
                error={errors.email?.message}
              />

              {/* 密碼 */}
              <Input
                label="密碼"
                type="password"
                placeholder="••••••••"
                {...register('password', {
                  required: '請輸入密碼',
                  minLength: {
                    value: 6,
                    message: '密碼至少需要 6 個字元',
                  },
                })}
                error={errors.password?.message}
              />

              {/* 忘記密碼連結 */}
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-primary-600 hover:text-primary-500"
                  >
                    忘記密碼？
                  </Link>
                </div>
              </div>

              {/* 登入按鈕 */}
              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? '登入中...' : '登入'}
              </Button>
            </form>
          </Card.Body>
        </Card>

        {/* 未透過 THINBOOK 作品集 */}
        <p className="mt-4 text-center text-sm text-gray-600">
          未透過 THINBOOK 作品集
        </p>
      </div>
    </div>
  );
};

