import { Link } from "react-router-dom";
import { Images } from "../../constant/images";
import '../user/nav.css';
const Navbar1 = () => {
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
            to="/PublisherDashBoard"
            className="active"
            onClick={() => Toggles("home")}
          >
            <span className="material-icons-sharp">home</span>
            <h3>Home</h3>
          </Link>
          <Link to="/FacultyLogin" onClick={() => Toggles("logout")}>
            <span className="material-icons-sharp">logout</span>
            <h3>Logout</h3>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Navbar1;