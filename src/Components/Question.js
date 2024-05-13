import React from "react"
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"

export default function Question({props})
{
    let [showInfo, setShowInfo] = React.useState(false)

    return(
        <article>
            <header>
             <h4>{props.title}</h4>
             <button onClick={()=>setShowInfo(!showInfo)}> {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/> } </button>
            </header>
            {showInfo && <p className="info">{props.info} </p>}
        </article>
    )
}