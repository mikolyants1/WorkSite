import { ChangeEvent } from "react"

interface props {
    chan2:(e:ChangeEvent<HTMLInputElement>)=>void,
    chan1:(e:ChangeEvent<HTMLSelectElement>)=>void,
    chan:(e:ChangeEvent<HTMLSelectElement>)=>void,
    press:()=>void,
    val:string,
    val1:string
}
export default function Head({chan2,chan1,chan,press,val,val1}:props):JSX.Element{
const mass:string[]=['all','art','biography','computers','history','medical','poetry']
return <header>
          <div className="title">
            <h2>
                Search for books
            </h2>
          </div>
         <div className="inp">
           <input type="text" onChange={chan2} /> 
           <button className="ser" onClick={press}>
               search
            </button>
        </div>
        <div className="sel">
            <div className="cat">
                <span>
                    categories
                </span>
                <select  value={val} onChange={chan}>
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
                <select  value={val1} onChange={chan1}>
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