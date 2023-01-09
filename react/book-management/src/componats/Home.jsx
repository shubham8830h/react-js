import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="link">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
