import service from '@/services/service'
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react'
import { AxiosRequestConfig } from 'axios'
import { ApiError } from './type'

const axiosBaseQuery = (): BaseQueryFn<
  {
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
  },
  unknown,
  ApiError
> =>
  async ({ url, method, data, params }) => {
    try {
      const result = await service({ url: url, method, data, params })
      return { data: result }
    } catch (err) {
      return {
        error: err as any
      }
    }
  }

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    hello: builder.query({
      query: () => ({
        url: 'index.html',
        method: 'GET'
      })
    })
  })
})

export const { useHelloQuery } = apiSlice