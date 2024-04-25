import { Link } from "react-router-dom";
import { Images } from "../../constant/images";
import { useNavigate } from "react-router-dom";
import './nav.css'
const Navbar = () => {
  const navigate = useNavigate();
  const Logout= () => {
    console.log("Log")
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      navigate('/StudentLogin');
  }
  return (
    <>
    <header className="alls">
        <div className="logo text-xl" title="University Management System">
          <img src={Images.Logo} alt="" />
          <h2 className="danger ">
            Q<span className="danger">A </span>
            <span className="text-blue-500">Generation</span>
          </h2>
        </div>
        <div className="navbar">
          <Link
            to="/StudentDashboard"
            className="active"
            onClick={() => Toggles("home")}
          >
            <span className="material-icons-sharp">home</span>
            <h3>Home</h3>
          </Link>
          <Link to="/StudentLogin"  onClick={() => Logout("logout")}>
            <span className="material-icons-sharp">logout</span>
            <h3>Logout</h3>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Navbar;
