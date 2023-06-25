export interface APIBaseResponse<T> {
  data: T
  message: string
  status: boolean | number
}
