import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SingleBlog from './pages/SingleBlog';
import Account from './pages/Account';
import WriteBlog from './pages/WriteBlog';
import Login from './pages/Login';
import Register from './pages/Register';
import { useContext } from 'react'
import { UserContext } from './Contexts/UserContext'

function App() {

  const { user } = useContext(UserContext)


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/:id" element={<SingleBlog />} />
        <Route path='/account' element={user?<Account />:<Login/>} />
        <Route path='/write' element={user?<WriteBlog />:<Login/>} />
        <Route path='/login' element={user?<Home />:<Login/>} />
        <Route path='/register' element={user?<Home />:<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
