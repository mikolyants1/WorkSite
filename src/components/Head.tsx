import { ChangeEvent } from "react"
import { Title,Search,Select,Sorted,Times,Text, Categories,Header } from "./Style"
import img from '../assets/fon.jpg'
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
const mass:string[]=[
'all','art','biography','computers',
'history','medical','poetry'
]
return <Header img={img}>
         <Title>
            Search for books
         </Title>
         <Search>
           <input type="text" name="text"
            value={text} onChange={chan}
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
}