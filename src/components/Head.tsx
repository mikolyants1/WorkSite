import { ChangeEvent,KeyboardEvent,useContext} from "react"
import { Title,Search,Select,Sorted,Times,Text, Categories,Header, Container } from "./Style"
import Theme from "./Context"
import { context } from "../store/slice"
import { Context } from "../App"
export type union=HTMLSelectElement|HTMLInputElement
interface props {
    chan:(e:ChangeEvent<union>)=>void,
    press:()=>void,
    cat:string,
    old:string,
    text:string
}
export default function Head(props:props):JSX.Element{
const {chan,press,cat,old,text}:props=props
const {back}:context=useContext(Context)
const mass:string[]=['all','art','biography',
'computers','history','medical','poetry']
const keyHandler=(e:KeyboardEvent<HTMLInputElement>):void=>{
  if (e.key==='Enter') press()
}
return (
       <Header back={back}>
         <Title>
            Search for books
         </Title>
         <Container>
           <Theme />
         </Container>
         <Search>
           <input type="text" name="text"
            value={text} onChange={chan}
            onKeyUp={keyHandler}
            /> 
           <button onClick={press}>
             search
           </button>
         </Search>
         <Sorted>
          <Categories>
            <Text>
              categories
            </Text>
            <Select value={cat} name="cat" onChange={chan}>
             {mass.map((item:string):JSX.Element=>(
              <option key={item} value={item}>
                {item}
              </option>
              ))}
            </Select>
          </Categories>
          <Times>
            <Text>
              sorting by
            </Text>
            <Select value={old} name="old" onChange={chan}>
              <option value="relevance">
                 relevance
              </option>
              <option value="newest">
                 newest
              </option>
            </Select>
          </Times>
        </Sorted>
      </Header>
    )
}