# 📚 學習指南

## 🎉 恭喜！您已完成第一階段

我們已經成功建立了一個現代化的前端專案架構。讓我帶您了解已經完成的部分。

## ✅ 已完成的內容

### 1. 專案基礎架構 ⚙️

**完成項目：**
- ✅ 使用 Vite 建立 React + TypeScript 專案
- ✅ 安裝所有必要的依賴套件
- ✅ 配置 Tailwind CSS
- ✅ 設置完整的資料夾結構

**您學到了什麼：**
- 📦 現代前端專案的基本結構
- 🛠️ package.json 和依賴管理
- 🎨 Tailwind CSS 的配置方式

### 2. 基礎 UI 組件庫 🧩

**完成的組件：**
1. **Button** (`src/components/ui/Button.tsx`)
   - 多種樣式變體（primary, secondary, outline, danger）
   - 不同尺寸（sm, md, lg）
   - 禁用狀態和全寬度選項

2. **Input** (`src/components/ui/Input.tsx`)
   - 標籤和錯誤訊息顯示
   - 使用 forwardRef 支援表單庫
   - 輔助說明文字

3. **Card** (`src/components/ui/Card.tsx`)
   - 組合式設計（Card.Header, Card.Body, Card.Footer）
   - Hover 效果選項

4. **Loading** (`src/components/ui/Loading.tsx`)
   - 旋轉動畫
   - 全螢幕和一般模式
   - 可自訂尺寸

5. **Modal** (`src/components/ui/Modal.tsx`)
   - 使用 React Portal
   - ESC 鍵關閉
   - 防止背景滾動

**您學到了什麼：**
- 🎯 組件化思維
- 📝 TypeScript 介面定義
- 🎨 Tailwind CSS 的使用
- 🔧 Props 的傳遞和使用

### 3. 版面配置組件 🏗️

**完成的組件：**
1. **Navbar** (`src/components/layout/Navbar.tsx`)
   - 響應式導航列
   - 手機版漢堡選單
   - 活動狀態高亮

2. **Footer** (`src/components/layout/Footer.tsx`)
   - 三欄式版面
   - 快速連結和聯絡資訊

3. **Layout** (`src/components/layout/Layout.tsx`)
   - 主要版面結構
   - 使用 React Router 的 Outlet

**您學到了什麼：**
- 🧭 React Router 的 Link 和 useLocation
- 📱 響應式設計概念
- 🎯 條件渲染

### 4. 頁面組件 📄

**完成的頁面：**
1. **首頁** (`src/pages/Home/HomePage.tsx`)
   - Hero Section
   - 功能介紹區塊
   - Call to Action

2. **登入頁面** (`src/pages/Auth/LoginPage.tsx`)
   - React Hook Form 表單處理
   - 表單驗證
   - 錯誤訊息顯示

3. **註冊頁面** (`src/pages/Auth/RegisterPage.tsx`)
   - 多欄位表單
   - 複雜驗證規則
   - 密碼強度檢查

**您學到了什麼：**
- 📝 React Hook Form 的使用
- ✅ 表單驗證邏輯
- 🔄 狀態管理基礎

### 5. TypeScript 類型定義 📐

**完成的類型：**
- User（使用者）
- Membership（會員籍）
- Course（課程）
- Booking（預約）
- ActivityBooking（活動預約）
- CourseFeedback（課程回饋）
- CalendarEvent（行事曆事件）

**您學到了什麼：**
- 🎯 TypeScript 介面定義
- 📊 資料結構設計
- 🔒 類型安全的好處

## 🚀 如何執行專案

### 1. 確認開發伺服器已啟動

開啟終端機，執行：
```bash
cd pilot-course-system
npm run dev
```

### 2. 開啟瀏覽器

訪問 http://localhost:5173

### 3. 測試功能

- 瀏覽首頁
- 點擊導航列的連結
- 測試登入和註冊表單
- 試著調整瀏覽器視窗大小，查看響應式效果

## 🎯 重點學習概念

### 1. 組件化思維 🧩

**為什麼要組件化？**
- ♻️ 可重用：同一個組件可以在多個地方使用
- 🔧 易維護：修改一個組件，所有使用它的地方都會更新
- 📦 易測試：小組件容易測試和除錯

**範例：**
```tsx
// Button 組件可以在任何地方使用
<Button variant="primary" size="lg">提交</Button>
<Button variant="outline" size="sm">取消</Button>
```

### 2. Props 傳遞 📤

**什麼是 Props？**
Props 就像是組件的參數，讓組件可以接收外部資料。

**範例：**
```tsx
// 定義 Props 介面
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

// 使用 Props
<Button variant="primary" size="lg">
  點我
</Button>
```

### 3. 狀態管理 🔄

**什麼是狀態（State）？**
狀態是組件內部的資料，當狀態改變時，組件會重新渲染。

**範例：**
```tsx
const [isLoading, setIsLoading] = useState(false);

// 改變狀態
setIsLoading(true);
```

### 4. React Router 路由 🧭

**為什麼需要路由？**
單頁應用（SPA）需要路由來管理不同的頁面。

**範例：**
```tsx
<Route path="/" element={<HomePage />} />
<Route path="/login" element={<LoginPage />} />
```

### 5. TypeScript 類型安全 🔒

**為什麼使用 TypeScript？**
- ✅ 在編寫時就能發現錯誤
- 📚 更好的程式碼提示
- 🔍 更容易重構

**範例：**
```tsx
interface User {
  id: string;
  name: string;
  email: string;
}

// TypeScript 會檢查類型
const user: User = {
  id: '1',
  name: '王小明',
  email: 'test@example.com'
};
```

## 📂 專案結構解析

```
pilot-course-system/
├── src/
│   ├── components/        # 所有可重用的組件
│   │   ├── ui/           # 基礎 UI 組件
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Loading.tsx
│   │   │   └── Modal.tsx
│   │   └── layout/       # 版面配置組件
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       └── Layout.tsx
│   ├── pages/            # 頁面組件
│   │   ├── Home/
│   │   │   └── HomePage.tsx
│   │   └── Auth/
│   │       ├── LoginPage.tsx
│   │       └── RegisterPage.tsx
│   ├── types/            # TypeScript 類型定義
│   │   └── index.ts
│   ├── App.tsx           # 主應用組件（路由配置）
│   ├── main.tsx          # 入口文件
│   └── index.css         # 全域樣式
├── public/               # 靜態資源
├── package.json          # 依賴管理
├── tsconfig.json         # TypeScript 配置
├── tailwind.config.js    # Tailwind CSS 配置
└── vite.config.ts        # Vite 配置
```

## 🔍 程式碼導讀

### Button 組件解析

```tsx
// 1. 定義 Props 介面
interface ButtonProps {
  children: React.ReactNode;  // 按鈕內容
  onClick?: () => void;        // 點擊事件（選填）
  variant?: 'primary' | 'secondary';  // 樣式變體
}

// 2. 建立組件
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',  // 預設值
}) => {
  // 3. 根據 props 決定樣式
  const variantStyles = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-600 text-white',
  };

  // 4. 渲染 HTML
  return (
    <button
      onClick={onClick}
      className={variantStyles[variant]}
    >
      {children}
    </button>
  );
};
```

### 表單處理解析

```tsx
// 1. 使用 React Hook Form
const { register, handleSubmit, formState: { errors } } = useForm();

// 2. 定義提交處理
const onSubmit = async (data) => {
  console.log(data);  // 表單資料
};

// 3. 綁定到表單
<form onSubmit={handleSubmit(onSubmit)}>
  <Input
    {...register('email', {
      required: '請輸入電子信箱',  // 驗證規則
    })}
    error={errors.email?.message}  // 錯誤訊息
  />
</form>
```

## 🎓 下一步學習

### 階段二：實作主要功能頁面

接下來我們會實作：
1. 📅 **課程預定管理**（整合 FullCalendar）
2. 📋 **課程列表和詳情**
3. ✈️ **儀器練習與活動預約**
4. 📑 **我的預約**（含 QR Code）
5. 💬 **課程回饋表單**
6. 👤 **個人帳戶管理**

### 學習建議

1. **動手修改** - 試著改變按鈕的顏色、文字等
2. **閱讀註解** - 每個組件都有詳細的學習註解
3. **提出問題** - 不懂的地方立即詢問
4. **小步前進** - 一次學一個概念

## 💡 常見問題

### Q: 為什麼使用 Tailwind CSS？
A: Tailwind CSS 讓我們可以快速建立美觀的介面，不需要寫複雜的 CSS。

### Q: 什麼是 TypeScript？
A: TypeScript 是 JavaScript 的超集，增加了類型檢查，讓程式碼更安全。

### Q: React Hook Form 是什麼？
A: 一個高效能的表單處理庫，讓表單驗證變得簡單。

### Q: 如何查看組件的效果？
A: 啟動開發伺服器後，在瀏覽器中開啟 http://localhost:5173

## 🎯 實戰練習

### 練習 1：修改按鈕顏色
找到 `src/components/ui/Button.tsx`，試著加入新的 variant：
```tsx
const variantStyles = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white',
  success: 'bg-green-600 hover:bg-green-700 text-white',  // 新增這行
};
```

### 練習 2：在首頁添加新區塊
打開 `src/pages/Home/HomePage.tsx`，在最後加入一個新的 section。

### 練習 3：理解表單驗證
查看 `src/pages/Auth/LoginPage.tsx`，理解每個驗證規則的作用。

## 📚 參考資源

- [React 官方教學](https://react.dev/learn)
- [TypeScript 手冊](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [React Hook Form 文檔](https://react-hook-form.com/)

---

**準備好繼續下一階段了嗎？讓我們一起完成更多功能！** 🚀

