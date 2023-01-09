
import { Link } from "react-router-dom";
import "./singup.css";

const Signup = () => {
  return (
    <div className="signup">
      <h3>Signup</h3>

      <div className="signup-input">
        <label>Name: </label>
        <input placeholder="Name" />
        <br />
        <label>Email ID.: </label>
        <input type="email" placeholder="Email" />
        <br />
        <label>Phone No.: </label>
        <input placeholder="Phone" />
        <br />
        <label>Password: </label>
        <input type="text" placeholder="Password" />
        <br />
        <br />
        <button>SignUp</button>
      </div>

      <Link to="/login">Submit</Link>
    </div>
  );
};

export default Signup;
