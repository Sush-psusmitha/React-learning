
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/home';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import User from './components/User';
import UserAnu from './components/User-anu';
import OldBook from './components/OldBooks';
import NewBook from './components/NewBooks';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
             <li><Link to="/user/1">User 1</Link></li>
             <li><Link to="/user/2">User 2</Link></li>
             <li><Link to="/user/3">User 3</Link></li>
             <li><Link to="/user-name/anu">User Anu</Link></li>

            
          </ul>
          <ul>
            <li><Link to='/books/new-books'>New Books</Link></li>
            <li><Link to='/books/old-books'>Old Books</Link></li>
          </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/user/:id" element={<User/>}></Route>
          <Route path="/user-name/:name" element={<UserAnu/>}></Route>

          <Route path='/books'>
            <Route path='old-books' element={<OldBook/>}></Route>
            <Route path='new-books' element={<NewBook/>} ></Route>
          </Route>
        </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
