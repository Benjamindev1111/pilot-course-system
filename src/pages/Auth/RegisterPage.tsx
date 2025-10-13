/**
 * 📝 註冊頁面
 * 
 * 學習重點：
 * 1. 複雜表單處理
 * 2. 表單驗證規則
 * 3. 密碼強度檢查
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input, Button, Card } from '../../components/ui';

/**
 * 註冊表單資料介面
 */
interface RegisterFormData {
  name: string;          // 中文姓名
  studentId: string;     // 學號=帳號
  password: string;      // 密碼
  phone: string;         // 電話
  address: string;       // 地址
}

/**
 * RegisterPage 組件
 */
export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  // 使用 React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();

  /**
   * 表單提交處理
   */
  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError('');

    try {
      // TODO: 之後會串接真實的 API
      console.log('註冊資料:', data);
      
      // 模擬 API 請求
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 註冊成功後導航到登入頁
      navigate('/login');
    } catch (err) {
      setError('註冊失敗，請稍後再試');
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
              註冊
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              已有帳號？{' '}
              <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
                立即登入
              </Link>
            </p>
          </Card.Header>

          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* 錯誤訊息 */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* 中文姓名 */}
              <Input
                label="中文姓名"
                type="text"
                placeholder="王小明"
                {...register('name', {
                  required: '請輸入姓名',
                  minLength: {
                    value: 2,
                    message: '姓名至少需要 2 個字元',
                  },
                })}
                error={errors.name?.message}
              />

              {/* 學號=帳號 */}
              <Input
                label="學號=帳號"
                type="text"
                placeholder="請輸入學號"
                {...register('studentId', {
                  required: '請輸入學號',
                  minLength: {
                    value: 3,
                    message: '學號至少需要 3 個字元',
                  },
                })}
                error={errors.studentId?.message}
              />

              {/* 密碼 */}
              <Input
                label="密碼"
                type="password"
                placeholder="至少 6 個字元"
                {...register('password', {
                  required: '請輸入密碼',
                  minLength: {
                    value: 6,
                    message: '密碼至少需要 6 個字元',
                  },
                })}
                error={errors.password?.message}
              />

              {/* 電話 */}
              <Input
                label="電話"
                type="tel"
                placeholder="0912345678"
                {...register('phone', {
                  required: '請輸入電話',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: '請輸入有效的電話號碼（10 碼）',
                  },
                })}
                error={errors.phone?.message}
              />

              {/* 地址 */}
              <Input
                label="地址"
                type="text"
                placeholder="台北市中正區..."
                {...register('address', {
                  required: '請輸入地址',
                })}
                error={errors.address?.message}
              />

              {/* 註冊按鈕 */}
              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? '註冊中...' : '註冊'}
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

