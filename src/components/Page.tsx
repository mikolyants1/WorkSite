import { Params, useParams } from "react-router-dom"
import { useGetBookByIdQuery} from "../store/Api"
import { PageHeader,MainPage,PageAuthor,PageCat,PageImg,
PageText,PageTitle,PageWrap,TextItem,PageName,Back } from "./Style"
import {useContext} from 'react'
import { context } from "../store/slice"
import { Context } from "../App"
import img1 from '../assets/No_Cover.jpg'
import Theme from "./Context"
import { Link } from "react-router-dom"

interface image{
 smallThumbnail:string
}
export interface data<T>{
  imageLinks:image,
  categories:T,
  authors:T,
  description:T,
  title:string
}
interface date{
  volumeInfo:data<[]>
}
interface query{
  data:date,
  isLoading:boolean,
  isError:boolean
}
export default function Page():JSX.Element{
  const {id}:Readonly<Params<string>>=useParams<string>()
  const {data,isLoading,isError}=useGetBookByIdQuery<query>(id)
  const {back}:context=useContext(Context)
  if (isLoading) return <div>...</div>
  if (isError) return <div>error</div>
  const {imageLinks,categories,authors,description,title}:data<[]>=data.volumeInfo
    return (
           <PageWrap back={back}>
             <PageHeader back={back}>
               <Back back={back}>
                 <Link to='/'>
                    &#8592;Main
                 </Link>
               </Back>
               <PageName>
                   Page Book
               </PageName>
               <Back>
                 <Theme />
               </Back>
             </PageHeader>
             <MainPage back={back}>
               <PageImg back={back}>
                  <img alt="" src={!imageLinks?img1:imageLinks.smallThumbnail} />
               </PageImg>
               <PageText>
                 <PageCat>
                  {categories&&categories.map((item:string,i:number):JSX.Element=>(
                   <TextItem key={i}>
                     {item}
                   </TextItem>
                   ))}
                 </PageCat>
                 <PageTitle back={back}>
                   <h3>
                     {title}
                   </h3>
                 </PageTitle>
                 <PageAuthor>
                   {authors&&authors.map((item:string,i:number):JSX.Element=>(
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
           </PageWrap>
         )
  }