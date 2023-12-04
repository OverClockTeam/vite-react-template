import { A, B, C } from "@/app/error_code"

export interface ApiResponse<T = undefined> {
  code: string,
  msg: string,
  result: T
}

export interface ApiError {
  status: number,
  code: A | B | C,
  msg: string,
  data: unknown
}