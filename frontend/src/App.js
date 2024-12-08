import "./index.css"
import React, { useState } from "react"
import axios from "axios"

function App() {

  const [fruits, newFruits] = useState("")
  const [fruitList, setFruitList] = useState([])

  function checker(event) {
    newFruits(event.target.value)
  }

  function fruitAdd() {

    const fruitdetails = axios.get(`http://localhost:5000/fruitname?newfruit=${fruits}`)

    fruitdetails.then(function (data) {

      var newFruit = data.data.newfruit
      setFruitList((prevList) => [...prevList, newFruit])
      newFruits("")

    })
  }
  return (
    <div >
      <div>
        <h1 className="text-[#FEC001] text-3xl m-5">Input</h1>




        <div className="w-64 bg-gray-200 p-10 gap-5 ">

          <input value={fruits} onChange={checker} name="newfruit" className="block mb-5 rounded-md border border-black" type="text" />

          <button onClick={fruitAdd} className=" border border-black px-1 rounded-md"  >Add Fruit</button>


        </div>
      </div>

      <h1 className="text-[#FEC001] text-3xl m-10">Output </h1>

      <div className="m-10 bg-[#1C2C35] w-64 p-10 text-gray-200 text-xl">

        <p> [{fruitList.join(", ")}]</p>


      </div>

    </div>
  )
}

export default App