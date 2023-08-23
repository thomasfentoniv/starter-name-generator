import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

useEffect(() => {
  fetch('https://starter-name-generator-ssg5.onrender.com/generate') // Change this URL to the one that you just deployed
    .then((res) => res.json())
    .then((name) => setName([name]))


  return (
    <h1>{name}</h1>
  )
}

export default App
