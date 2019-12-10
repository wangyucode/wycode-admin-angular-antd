export interface JsonResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ServerError extends JsonResult<null> {
  path: string;
  status: number;
  timestamp: Date;
  message: string;
}
