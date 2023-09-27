import {Api, BaseQueryFn, FetchBaseQueryError,FetchBaseQueryMeta,
FetchArgs,createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { union } from '../components/Page'
import { EndpointBuilder, QueryDefinition } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { coreModuleName } from '@reduxjs/toolkit/dist/query/core/module'
import { reactHooksModuleName } from '@reduxjs/toolkit/dist/query/react/module'

export const BaseUrl:string='https://www.googleapis.com/books/v1/volumes'
export type union1=string|FetchArgs
export type union2=typeof coreModuleName | typeof reactHooksModuleName

export type builder=EndpointBuilder<BaseQueryFn<union1,unknown,
FetchBaseQueryError,{},FetchBaseQueryMeta>,never,"Books">

type queryFunc1=QueryDefinition<union,BaseQueryFn<union1,unknown,
FetchBaseQueryError,{},FetchBaseQueryMeta>,never,any,"Books">

type ApiType=Api<BaseQueryFn<union1,unknown,FetchBaseQueryError,{},
FetchBaseQueryMeta>,{getBookById:queryFunc1},"Books",never,union2>

export const BookApi:ApiType=createApi({
    reducerPath:'Books',
    baseQuery:fetchBaseQuery({
      baseUrl:`${BaseUrl}`
    }),
    endpoints:(build:builder)=>({
        getBookById:build.query<any,union>({
         query:(id:string):string=>`/${id}`
        })
    })
})
export const {useGetBookByIdQuery}:ApiType=BookApi