import Navbar from './components/Navbar'
import Home from './components/Home'
import ProgramsList from './components/ProgramsList'
import AddProgram from './components/AddProgram'
import EditProgram from './components/EditProgram'
import Program from './components/Program'
import { Routes, Route } from 'react-router-dom'


function App() {

	return (
		<div className="App">
		<Navbar />
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='/programs' element={<ProgramsList />}/>
			<Route path='/programs/:id/edit' element={<EditProgram />}/>
			<Route path='/programs/new' element={<AddProgram />}/>
			<Route path='/programs/:id' element={<Program />}/>
		</Routes>
		</div>
	);
}

export default App;
