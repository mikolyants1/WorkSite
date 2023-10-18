import {BaseQueryFn, createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { data} from '../components/Page'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
type union=string|undefined
export const BaseUrl:string='https://www.googleapis.com/books/v1/volumes'

export const BookApi=createApi({
  reducerPath:'Books',
  refetchOnFocus:true,
  baseQuery:fetchBaseQuery({
    baseUrl:`${BaseUrl}`
  }),
  endpoints:(build:EndpointBuilder<BaseQueryFn,string,string>)=>({
    getBookById:build.query<data<[]>,union>({
      query:(id:string):string=>`/${id}`
    })
  })
})
export const {useGetBookByIdQuery}=BookApi