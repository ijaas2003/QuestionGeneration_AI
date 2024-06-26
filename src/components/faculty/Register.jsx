import { useState } from "react";
import fac from '../../assets/regi.png'
import { toast } from 'react-toastify'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
const Register = () => {

	const success = (msg) => toast.success(msg)
	const error = (msg) => toast.error(msg)
	const navigate = useNavigate();
	const [username, setUser] = useState('');
	const [email, setemail] = useState('');
	const [dept, setdept] = useState('');
	const [taught, settaugth] = useState('');
	const [pass,setpass] =useState('');
	const [c_pass,setc_pass]=useState('');
	console.log(username, email,pass,c_pass);
	const HandleSubmit = () => {
		fetch('http://localhost:5000/FacultyRegister', {
			method:"POST",
			headers:{
				"content-Type":"application/json"
			},
			body:JSON.stringify({username, email, dept, taught, pass, c_pass})
		}).then(res => {
			return res.json()
		}).then(res => {
			if(res.error) {
				error(res.error)
			}
			else{
				success(res.message);
				navigate('/FacultyLogin')
			}
			console.log(res);
		})
	}
	return(
		<div>
			<div className="fa1 h-[100vh] w-[100%]  flex justify-center items-center ">
				<div className="ma2  bg-white h-[603px] w-[850px] flex opacity-60 rounded-3xl p-[30px]  relative">
					<div className="basis-[40%] ">
					<img src={fac} className="login-Pg mt-[85px] ml-[50px] h-[230px]"></img>
					</div>
					<div className="basis-[60%]">
					<h1 className="lo text-[25px] font-bold text-center py-[10px]">Faculty Registration</h1>
					<div className="px-[40px]">
					<input type="text" placeholder="Enter the Username" name="UserName" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setUser(e.target.value)}/>
					<input type="email" placeholder="Enter the Email ID" name="email" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setemail(e.target.value)}  />
					<input type="text" placeholder="Enter the Dept" name="dept" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setdept(e.target.value)}  />
					<input type="text" placeholder="Enter the Subject Teach" name="taught" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => settaugth(e.target.value)}  />
					<input type="password" placeholder="Enter the Password" name="pass" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setpass(e.target.value)}/>
					<input type="password" placeholder="Re-Enter Password" name="conf" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setc_pass(e.target.value)}/>
					</div>
					<div className="flex justify-evenly h-[100px]">
						<div className="">
							<button className="subb font-bold ml-[40px]" onClick={HandleSubmit}>Submit</button>
						</div>
						<div className="flex items-center">
						<p className="ml-[20px] mt-3">Already have an account? <Link to="/FacultyLogin" className="text-blue-500">Login</Link></p>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>	
	)
}
export default Register;
