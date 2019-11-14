export interface JsonResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}
