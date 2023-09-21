
import { Link } from "react-router-dom"
import { Main,Result,Item,Img,Name,Authors,Category } from "./Style" 
interface props {
    mass:Array<any>,
    show:number,
    next:()=>void,
}
type union=JSX.Element|null
export default function Search({mass,show,next}:props):union{
if (mass.length!==0){
return <div>
         <Result>
            found {show} results
         </Result>
         <Main>
           {mass.map((item:any,i:number):JSX.Element=>{
            const {imageLinks,categories,title,authors}:any=item.volumeInfo
             return <Item key={i}>
                      <Link to={`/${item.id}`}>
                        <Img alt=""  src={!imageLinks.smallThumbnail?'':imageLinks.smallThumbnail} />
                        <Category>
                          {!categories?'':categories.map((item:string,i:number):JSX.Element=>(
                            <div key={i}>
                                {item}
                            </div>
                            ))}
                        </Category>
                        <Name>
                          {title}
                        </Name>
                        <Authors>
                          {!authors?'':authors.map((item:string,i:number):JSX.Element=>(
                            <div key={i}>
                                {item}
                            </div>
                           ))}
                        </Authors>
                      </Link>
                    </Item>
                    })}
                 </Main>
                 <div onClick={next}>
                    load more
                 </div>
               </div>
    }
    return null
}