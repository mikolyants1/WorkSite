import { Params, useParams } from "react-router-dom"
import { useGetBookByIdQuery ,union1} from "../store/Api"
import { UseQueryHookResult} from "@reduxjs/toolkit/dist/query/react/buildHooks"
import { BaseQueryFn, FetchBaseQueryError,FetchBaseQueryMeta,QueryDefinition } from "@reduxjs/toolkit/dist/query"
import { Header, Title,MainPage,PageAuthor,PageCat,PageImg,PageText,PageTitle } from "./Style"
export type union=string|undefined
type query=UseQueryHookResult<QueryDefinition<union,BaseQueryFn<union1,
unknown,FetchBaseQueryError,{},FetchBaseQueryMeta>,never,any,"Books">>

export default function Page():JSX.Element{
   const {id}:Readonly<Params<string>>=useParams<string>()
   const {data,isLoading,isError}=useGetBookByIdQuery<query>(id)
   if (isLoading) return <div>...</div>
   if (isError) return <div>error</div>
   const {imageLinks,categories,authors,description,title}:any=data.volumeInfo
    return <div>
             <Header>
               <Title>
                 <h2>
                   Search for books
                 </h2>
               </Title>
             </Header>
             <MainPage>
               <PageImg>
                  <img alt="" src={!imageLinks.smallThumbnail?'':imageLinks.smallThumbnail} />
               </PageImg>
               <PageText>
                 <PageCat>
                    {!categories?'':categories.map((item:string,i:number):JSX.Element=>(
                        <div key={i}>
                           {item}
                        </div>
                      ))}
                 </PageCat>
                 <PageTitle>
                   <h3>
                     {title}
                   </h3>
                 </PageTitle>
                 <PageAuthor>
                    {!authors?'':authors.map((item:string,i:number):JSX.Element=>(
                      <div key={i}>
                         {item}
                      </div>
                      ))}
                 </PageAuthor>
                 <div>
                    {!description?'':description}
                 </div>
               </PageText>
             </MainPage>
           </div>
  }