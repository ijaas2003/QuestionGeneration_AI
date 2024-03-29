import { useState } from "react";
import fac from '../../assets/regi.png'
import { toast } from 'react-toastify'
import { Link } from "react-router-dom";
const Register = () => {
	const success = (msg) => toast.success(msg)
	const error = (msg) => toast.error(msg)

	const [username, setUser] = useState('');
	const [email, setemail] = useState('');
	const [pass,setpass] =useState('');
	const [c_pass,setc_pass]=useState('');
	console.log(username, email,pass,c_pass);
	const HandleSubmit = () => {
		fetch('http://localhost:5000/FacultyRegister', {
			method:"POST",
			headers:{
				"content-Type":"application/json"
			},
			body:JSON.stringify({username, email,pass,c_pass})
		}).then(res => {
			return res.json()
		}).then(res => {
			if(res.error) {
				error(res.error)
			}
			else{
				success(res.message);
			}
			console.log(res);
		})
	}
	return(
		<div>
			<div className="fa1 h-[100vh] w-[100%]  flex justify-center items-center ">
				<div className="ma2  bg-white h-[480px] w-[850px] flex opacity-60 rounded-3xl p-[30px]  relative">
					<div className="basis-[40%] ">
					<img src={fac} className="login-Pg mt-[85px] ml-[50px] h-[230px]"></img>
					</div>
					<div className="basis-[60%]">
					<h1 className="lo text-[25px] font-bold text-center py-[10px]">Faculty Registration</h1>
					<div className="px-[40px]">
					<input type="text" placeholder="Enter Username" name="UserName" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setUser(e.target.value)}/>
					<input type="email" placeholder="Enter EmailID" name="email" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setemail(e.target.value)}  />
					<input type="password" placeholder="Enter Password" name="pass" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setpass(e.target.value)}/>
					<input type="password" placeholder="Re-Enter Password" name="conf" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setc_pass(e.target.value)}/>
					</div>
					<div className="flex justify-evenly h-[100px]">
						<div className="">
							<button className="sub font-bold ml-[40px]" onClick={HandleSubmit}>Submit</button>
						</div>
						<div className="flex items-center">
						<p className="ml-[20px] mt-3">Already have an account? <Link to="/FacultyLogin" className="text-blue-500">Register</Link></p>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>	
	)
}
export default Register;
