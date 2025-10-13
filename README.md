# 🛫 FTTW 機師選課系統

這是一個為機師補習班設計的選課系統，提供課程預定、儀器練習預約等功能。

## 📚 學習目標

這個專案採用現代前端技術棧，適合新手學習：
- **React 18** - 現代化的 UI 框架
- **TypeScript** - 類型安全的 JavaScript
- **Tailwind CSS** - 實用優先的 CSS 框架
- **React Router** - 單頁應用路由
- **React Hook Form** - 表單處理

## 🚀 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器訪問 http://localhost:5173

### 3. 建置生產版本

```bash
npm run build
```

## 📁 專案結構

```
src/
├── components/          # 組件
│   ├── ui/             # 基礎 UI 組件（Button, Input, Card...）
│   ├── layout/         # 版面配置組件（Navbar, Footer...）
│   └── features/       # 功能性組件
├── pages/              # 頁面組件
│   ├── Home/           # 首頁
│   ├── Auth/           # 登入/註冊
│   ├── Courses/        # 課程相關
│   ├── Booking/        # 預約相關
│   └── Account/        # 帳戶管理
├── hooks/              # 自訂 Hooks
├── store/              # 狀態管理
├── types/              # TypeScript 類型定義
├── utils/              # 工具函數
├── styles/             # 全域樣式
├── App.tsx             # 主應用組件
└── main.tsx            # 入口文件
```

## 🎯 功能模組

### ✅ 已完成
- [x] 專案基礎架構
- [x] 基礎 UI 組件庫
- [x] 導航列和版面配置
- [x] 首頁
- [x] 登入頁面
- [x] 註冊頁面

### 🚧 開發中
- [ ] 課程預定管理（月曆視圖）
- [ ] 課程列表和詳情
- [ ] 儀器練習與活動預約
- [ ] 我的預約
- [ ] 課程回饋
- [ ] 個人帳戶管理

## 🎨 設計特色

- **響應式設計** - 完美支援手機、平板和桌面
- **現代化 UI** - 使用 Tailwind CSS 打造美觀介面
- **類型安全** - TypeScript 確保程式碼品質
- **組件化** - 可重用的組件設計

## 📖 學習資源

- [React 官方文檔](https://react.dev/)
- [TypeScript 手冊](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [React Router 文檔](https://reactrouter.com/)

## 👨‍💻 開發注意事項

1. **程式碼註解** - 所有組件都有詳細的學習註解
2. **循序漸進** - 從簡單到複雜，逐步學習
3. **實戰導向** - 每個功能都對應真實需求
4. **最佳實踐** - 遵循業界標準和最佳實踐

## 📝 待辦事項

查看專案中的 `.plan.md` 文件了解詳細的開發計劃。

## 🤝 貢獻

這是一個學習專案，歡迎提出問題和建議！

## 📄 授權

THINBOOK 作品集
