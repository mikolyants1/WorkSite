import { Params, useParams } from "react-router-dom"
import { useGetBookByIdQuery ,union1} from "../store/Api"
import { UseQueryHookResult} from "@reduxjs/toolkit/dist/query/react/buildHooks"
import { BaseQueryFn, FetchBaseQueryError,FetchBaseQueryMeta,QueryDefinition } from "@reduxjs/toolkit/dist/query"
import { Header,Title,MainPage,PageAuthor,PageCat,PageImg,PageText,PageTitle,TextItem } from "./Style"
import img from '../assets/fon.jpg'
export type union=string|undefined
type query=UseQueryHookResult<QueryDefinition<union,BaseQueryFn<union1,
unknown,FetchBaseQueryError,{},FetchBaseQueryMeta>,never,any,"Books">>
interface image{
 smallThumbnail:string
}
interface data<T>{
  imageLinks:image,
  categories:T,
  authors:T,
  description:T,
  title:string
}
export default function Page():JSX.Element{
  const {id}:Readonly<Params<string>>=useParams<string>()
  const {data,isLoading,isError}=useGetBookByIdQuery<query>(id)
  if (isLoading) return <div>...</div>
  if (isError) return <div>error</div>
  const {imageLinks,categories,authors,description,title}:data<[]>=data.volumeInfo
    return <>
             <Header img={img}>
               <Title>
                  Search for books
               </Title>
             </Header>
             <MainPage>
               <PageImg>
                  <img src={!imageLinks.smallThumbnail?'':imageLinks.smallThumbnail} />
               </PageImg>
               <PageText>
                 <PageCat>
                  {!categories?'':categories.map((item:string,i:number):JSX.Element=>(
                    <TextItem key={i}>
                      {item}
                    </TextItem>
                  ))}
                 </PageCat>
                 <PageTitle>
                   <h3>
                     {title}
                   </h3>
                 </PageTitle>
                 <PageAuthor>
                    {!authors?'':authors.map((item:string,i:number):JSX.Element=>(
                     <TextItem key={i}>
                        {item}
                     </TextItem>
                    ))}
                 </PageAuthor>
                 <TextItem>
                    {!description?'':description}
                 </TextItem>
               </PageText>
             </MainPage>
           </>
  }