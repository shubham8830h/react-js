import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './componats/Login';
import Home from './componats/Home';
import Error from './componats/Error';
import Signup from './componats/Signup';
import Books from './componats/Books';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="logo">
          <h2>Book Management</h2>
        </div>
        <div className="route">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="signup" element={<Signup />} />

            <Route path="login" element={<Login />} />

            <Route path="getBook" element={<Books />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
