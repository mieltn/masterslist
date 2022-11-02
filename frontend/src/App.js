import Navbar from './components/Navbar'
import Home from './components/Home'
import Programs from './components/Programs'
import { Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react'

function App() {
  // const [program, setProgram] = useState([]);

  // useEffect(() => {
  //   getData()
  // }, [])

  // const getData = async () => {
  //   const pageResponse = await fetch(`/program`)
  //   const pageData = await pageResponse.json()
  //   setProgram(pageData)
  //   console.log(pageData)
  // }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/programs' element={<Programs />}/>
      </Routes>
      {/* <Navbar handleClick={getData} page = {page}/> */}
      {/* {program.map(program => (
        <div
          className="card"
          style={{margin: "10px 25% 10px 25%"}}
          key={program.id}
        >
          <div className="card-body">
            <h5 className="card-title">{program.name}</h5>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default App;
