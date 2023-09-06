import { useQuery,QueryFunction } from "@tanstack/react-query"
import { Params, useParams } from "react-router-dom"
import axios from "axios"
interface datas{
    data:any,
    isError:boolean,
    isLoading:boolean
  }
  
interface query{
    queryKey:string[],
    queryFn:QueryFunction
  }
  type union=string|undefined
async function Search(id:union):Promise<any>{
if (typeof id!=='undefined'){
return (await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)).data
    }
}
export default function Page():JSX.Element{
   const {id}:Readonly<Params<string>>=useParams()
   const {data,isError,isLoading}:datas=useQuery<query>(['books',id],()=>Search(id),
   {keepPreviousData:true,refetchOnWindowFocus:false})
   if (isLoading) return <div>...</div>
   if (isError) return <div>error</div>
   const vol:any=data.volumeInfo
    return <div>
           <header>
           <div className="title">
            <h2>
                Search for books
            </h2>
          </div>
           </header>
              <div className="mainPage">
                 <div className="pageImg">
                    <img className="perImg"
                     src={!vol.imageLinks.smallThumbnail?'':vol.imageLinks.smallThumbnail} alt="" />
                 </div>
                 <div className="pageText">
                     <div className="pageCat">
                        {
                        !vol.categories?'':vol.categories.map((item:any,i:number):JSX.Element=>{
                            return <div key={i} className="categ1">
                                  {item}
                                  </div>
                           })
                        }
                     </div>
                     <div className="pageTitle">
                        <h3>
                            {vol.title}
                        </h3>
                     </div>
                     <div className="pageAuthor">
                         {
                         !vol.authors?'':vol.authors.map((item:string,i:number):JSX.Element=>{
                          return <div key={i} className="authors">
                                      {item}
                                 </div>
                         })
                         }
                     </div>
                     <div className="pageDes">
                          {
                        !vol.description?'':vol.description
                          }
                     </div>
                 </div>
              </div>
          </div>
  }