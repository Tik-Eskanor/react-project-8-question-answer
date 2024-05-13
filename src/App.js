import React from "react"
import data from "./data"
import Question from "./Components/Question"


export default function App()
{
  let [questions, setQuestions] = React.useState(data)

  let questionComponents = questions.map((item)=>{
      return(
          <Question key={item.id} props={item}/>
      )
  })

  return (
    <main>
      <div className="container">
       <section className="box">
          <h1>Questions and answer</h1>
          {questionComponents}
       </section>
      </div>
    </main>
  )
}