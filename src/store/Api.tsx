import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { data} from '../components/Page'
type union=string|undefined
export const BaseUrl:string='https://www.googleapis.com/books/v1/volumes'

export const BookApi=createApi({
    reducerPath:'Books',
    baseQuery:fetchBaseQuery({
      baseUrl:`${BaseUrl}`
    }),
    endpoints:(build)=>({
      getBookById:build.query<data<[]>,union>({
        query:(id:string):string=>`/${id}`
      })
    })
})
export const {useGetBookByIdQuery}=BookApi