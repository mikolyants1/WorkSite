
import { Link } from "react-router-dom"
import { Main,Result,Item,Img,Name,Authors,Category,TextItem,Load } from "./Style" 
interface props {
    mass:Array<any>,
    show:number,
    next:()=>void,
}
type union=JSX.Element|null
export default function Search({mass,show,next}:props):union{
if (mass.length!==0){
 return <>
         <Result>
            found {show} results
         </Result>
         <Main>
           {mass.map((item:any,i:number):JSX.Element=>{
            const {imageLinks,categories,title,authors}:any=item.volumeInfo
             return <Item key={i}>
                      <Link to={`/${item.id}`}>
                        <Img alt="" src={!imageLinks.smallThumbnail?'':imageLinks.smallThumbnail} />
                        <Category>
                          {!categories?'':categories.map((item:string,i:number):JSX.Element=>(
                            <TextItem key={i}>
                                {item}
                            </TextItem>
                            ))}
                        </Category>
                        <Name>
                          {title}
                        </Name>
                        <Authors>
                          {!authors?'':authors.map((item:string,i:number):JSX.Element=>(
                            <TextItem key={i}>
                                {item}
                            </TextItem>
                           ))}
                        </Authors>
                      </Link>
                    </Item>
              })}
          </Main>
          <Load onClick={next}>
              load more
          </Load>
        </>
    }
    return null
}