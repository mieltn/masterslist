import Navbar from './components/Navbar'
import Home from './pages/Home'
import PrivateRoutes from './utils/PrivateRoutes'

import ProgramsList from './pages/ProgramsList'
import AddProgram from './pages/AddProgram'
import EditProgram from './pages/EditProgram'
import Program from './pages/Program'
import Login from './pages/Login'
import Register from './pages/Register'

import { Routes, Route } from 'react-router-dom'


function App() {

	return (
		<div className="App">
		<Navbar />
		<Routes>
			<Route element={<PrivateRoutes />}>
				<Route path='/' element={<Home />}/>
				<Route path='/programs' element={<ProgramsList />}/>
				<Route path='/programs/:id/edit' element={<EditProgram />}/>
				<Route path='/programs/new' element={<AddProgram />}/>
				<Route path='/programs/:id' element={<Program />}/>
			</Route>
			<Route path='/login' element={<Login />}/>
			<Route path='/register' element={<Register />}/>
		</Routes>
		</div>
	);
}

export default App;
