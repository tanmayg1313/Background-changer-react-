import { useState } from "react"


function App() {
  // ************syntax of "HOOKS" **************
  // const[variable,function] = useState(any_thing)   ..here any_thing = value of the variable 

  const [color, setColor] = useState("olive") 
  // now variable -> color = "Olive"  -> default
  // now onwards whenever "setColor" function is called then color variale gets updated

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setColor("green")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => setColor("Blue")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"Blue"}}>Blue</button>
            <button onClick={() => setColor("Olive")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"olive"}}>Olive</button>
            <button onClick={() => setColor("Black")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"black"}}>Black</button>
            <button onClick={() => setColor("Lavender")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style={{backgroundColor:"Lavender"}}>Lavender</button>
            <button onClick={() => setColor("Yellow")}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style={{backgroundColor:"Yellow"}}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
