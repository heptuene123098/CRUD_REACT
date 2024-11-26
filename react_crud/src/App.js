import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <h5>REACT CRUD operations with PHP API and MYSQL</h5>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path='user/create' element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
