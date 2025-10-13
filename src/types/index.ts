/**
 * 📚 類型定義文件
 * 
 * 這個文件定義了整個應用程式使用的資料結構類型
 * TypeScript 會幫助我們確保資料的正確性
 */

// ============ 使用者相關 ============

/**
 * 使用者介面
 */
export interface User {
  id: string;
  name: string;           // 中文姓名
  email: string;          // 電子信箱
  studentId: string;      // 學號或帳號
  phone: string;          // 電話
  address: string;        // 地址
  avatar?: string;        // 大頭照 URL（選填）
}

/**
 * 會員籍資訊
 */
export interface Membership {
  id: string;
  userId: string;
  courseName: string;     // 會員分類名稱（如：航線全科訓、CPL/IR 課程）
  startDate: string;      // 會員起始日
  endDate: string;        // 會員到期日
  status: 'active' | 'expired' | 'pending';  // 啟用狀態
}

// ============ 課程相關 ============

/**
 * 課程類型
 */
export type CourseCategory = '空教室' | 'C01' | 'C02' | 'C03' | 'C04' | '多益' | '外師&助教' | '模擬考';

/**
 * 課程介面
 */
export interface Course {
  id: string;
  code: string;           // 課程編號（如：C01-1）
  name: string;           // 課程名稱（如：數理）
  category: CourseCategory;
  teacher: string;        // 老師名稱
  startTime: string;      // 開始時間（ISO 8601 格式）
  endTime: string;        // 結束時間
  duration: number;       // 課程時數（小時）
  location: string;       // 地點
  maxStudents: number;    // 最大人數
  currentStudents: number; // 目前報名人數
  description?: string;   // 課程描述
  image?: string;         // 課程圖片 URL
  materials?: string[];   // 課程資料連結
}

// ============ 預約相關 ============

/**
 * 預約狀態
 */
export type BookingStatus = 'confirmed' | 'pending' | 'cancelled';

/**
 * 預約介面
 */
export interface Booking {
  id: string;
  userId: string;
  courseId: string;
  course?: Course;        // 關聯的課程資訊
  bookingDate: string;    // 預約時間
  status: BookingStatus;
  qrCode?: string;        // QR Code 資料
  feedback?: CourseFeedback; // 課程回饋
}

// ============ 活動預約相關 ============

/**
 * 活動/儀器練習類型
 */
export type ActivityType = '架上考古題' | '視力箱' | '大型模擬機' | '輕航機' | '維也納' | '記憶力';

/**
 * 活動預約介面
 */
export interface ActivityBooking {
  id: string;
  userId: string;
  activityType: ActivityType;
  title: string;          // 活動標題
  date: string;           // 日期
  timeSlot: string;       // 時段（如：14:00-17:00）
  location: string;       // 地點
  content?: string;       // 內容說明
  status: BookingStatus;
}

// ============ 課程回饋 ============

/**
 * 課程回饋介面
 */
export interface CourseFeedback {
  id: string;
  bookingId: string;
  userId: string;
  courseId: string;
  rating: number;         // 評分（1-5）
  comment: string;        // 回饋內容
  isPublic: boolean;      // 是否公開
  createdAt: string;
}

// ============ 行事曆事件 ============

/**
 * 行事曆事件介面（用於 FullCalendar）
 */
export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  extendedProps?: {
    courseCode?: string;
    teacher?: string;
    location?: string;
    type?: 'course' | 'activity';
  };
}

// ============ API 回應格式 ============

/**
 * API 成功回應
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

/**
 * API 錯誤回應
 */
export interface ApiError {
  success: false;
  error: string;
  message: string;
}

