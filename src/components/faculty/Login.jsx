import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import fac from '../../assets/regi.png'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

const Login = () => {
	const success = (msg) => toast.success(msg)
	const error = (msg) => toast.error(msg)
	const navigate = useNavigate();
	const [email, setemail] = useState('');
	const [pass,setpass] =useState('');
	console.log(email, pass);

	const HandleSubmit = () => {
		fetch('http://localhost:5000/FacultyLogin', {
			method:"POST",
			headers:{
				"content-Type":"application/json"
			},
			body:JSON.stringify({email,pass})
		}).then(res => {
			return res.json()
		}).then(res => {
			if(res.error) {
				error(res.error)
				navigate('/FacultyRegister')
			}
			else{
				localStorage.setItem('userId', res.facultyId);
				localStorage.setItem('type', 'faculty');
				success(res.message);
				navigate('/PublisherDashBoard')
			}
			console.log(res);
		})
	}

	return(
		<div>
			<div className="fa1 h-[100vh] w-[100%]  flex justify-center items-center ">
				<div className="ma2  bg-white h-[450px] w-[850px] flex opacity-60 rounded-3xl p-[30px]  relative">
				<div className="absolute top-5 left-10 rounded-full hover:bg-[#420f0f] cursor-pointer p-[15px]">
                    <Link to="/" className="text-[#420f0f] hover:text-white">
					<FaHome className="text-3xl" />
                    </Link>
                    </div>
					<div className="basis-[40%] ">
						<img src={fac} className="login-Pg mt-[85px] ml-[50px] h-[230px]"></img>
					</div>
					<div className="basis-[60%] flex flex-col">
						<h1 className="lo text-[25px] font-bold text-black text-center py-[10px]">Faculty Login</h1>
						<div className="px-[40px]">
							<input type="email" placeholder="Enter EmailID" name="email" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setemail(e.target.value)}  />
							<input type="password" placeholder="Enter Password" name="pass" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setpass(e.target.value)}/>
						</div>
						<div className="w-[100%] h-[100px] my-[10px] ">
							<button className="subb font-bold ml-[40px]" onClick={HandleSubmit}>Submit</button>
						</div>
						<div>
						<p className="ml-[40px] mt-3 text-black font-semibold text-lg">Don't have an account? <Link to="/FacultyRegister" className="text-blue-500">Register</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>	
	)
}

export default Login;
