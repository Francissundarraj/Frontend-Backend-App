import "./index.css"
import React, { useState } from "react"
import axios from "axios"
import card from "./assets/bg.jpg"

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
    <div className=" flex justify-center items-center rounded-lg" >

    <div className=" flex justify-center items-center rounded-lg relative flex-col ">
    <img
  className="w-3/6 border-4 border-neon rounded-md shadow-glow hover:shadow-glowGrow transform transition duration-300 ease-in-out hover:scale-105"
  src={card}
  alt="Fruit"
/>


      <h1 className="text-3xl p-2 font-semibold text-black top-40 absolute">Add a Fruit</h1>

      <div className="absolute top-72 gap-3 flex ">

<input value={fruits} onChange={checker} name="newfruit" className="block focus:outline-none p-1 rounded-md border border-black" type="text box" />

<button
  onClick={fruitAdd}
  className="border border-neon text-white px-4 py-2 rounded-md w-2/5 bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 hover:from-blue-500 hover:via-pink-600 hover:to-purple-700 focus:outline-none shadow-neon hover:shadow-2xl"
>
  Add Fruit
</button>



</div>

<div className="m-10 absolute top-72 left-80 p-10 font-bold text-xl">

        <p> [{fruitList.join(", ")}]</p>


      </div>

    </div>





    </div>





  )
}

export default App