export interface Course { id: string; title: string; description?: string; lessons?: any[] }
export interface StudentPerformance { studentId: string; name: string; score: number }
export interface Session { id: string; courseId: string; title: string; date: string }
export interface Notification { id: string; message: string; read?: boolean; time: string }
