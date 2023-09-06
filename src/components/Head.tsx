import { ChangeEvent } from "react"

interface props {
    change2:(e:ChangeEvent<HTMLInputElement>)=>void,
    change1:(e:ChangeEvent<HTMLSelectElement>)=>void,
    change:(e:ChangeEvent<HTMLSelectElement>)=>void,
    press:()=>void,
    value:string,
    value1:string
}
export default function Head({change2,change1,change,press,value,value1}:props):JSX.Element{
const mass:string[]=['all','art','biography','computers','history','medical','poetry']
return <header>
          <div className="title">
            <h2>
                Search for books
            </h2>
          </div>
         <div className="inp">
           <input type="text" onChange={change2} /> 
           <button className="ser" onClick={press}>
               search
            </button>
        </div>
        <div className="sel">
            <div className="cat">
                <span>
                    categories
                </span>
                <select  value={value} onChange={change}>
                {mass.map((item:string):JSX.Element=>{
                return <option key={item} value={item}>
                    {item}
                 </option>
                    })}
                </select>
            </div>
            <div className="how">
                <span>
                    sorting by
                </span>
                <select  value={value1} onChange={change1}>
                    <option value="relevance">
                        relevance
                    </option>
                    <option value="newest">
                        newest
                    </option>
                </select>
            </div>
        </div>
    </header>
}