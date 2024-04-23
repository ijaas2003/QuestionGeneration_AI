import { useState } from "react";
import log from '../../assets/login.png'
import{ toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
const LoginToDash = () => {
	const success = (msg) => toast.success(msg);
	const error = (msg) => toast.error(msg);

	const navigate = useNavigate();
	const [email, setemail] = useState('');
	const [pass, setPass] = useState('');
	console.log(email, pass);
	const HandleSubmit = () => {
		fetch('http://localhost:5000/LoginToDash', {
			method:"POST",
			headers:{
				"content-Type":"application/json"
			},
			body:JSON.stringify({ email, pass })
		}).then(res => {
			return res.json()
		}).then(res => {
			if(res.message) {
				success(res.message)
				localStorage.setItem('userId',res.userId);
				navigate('/Activity')
			}
			else {
				error(res.error)
			}
			console.log(res);
		})
	}
	return (
		<div>
			<div className="ma1 h-[100vh] w-[100%]  flex justify-center items-center ">
				<div className="ma2  bg-white h-[350px] w-[850px] flex opacity-60 rounded-3xl p-[30px]  relative">
					<div className="basis-[40%] ">
					<img src={log} className="login-Pg mt-[85px]"></img>
					</div>
					<div className="basis-[60%]">
					<h1 className="lo text-[25px] font-bold text-center py-[10px]">Student Login</h1>
					<div className="px-[40px]">
					{/* <input type="text" placeholder="Enter the Username" name="UserName" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setUser(e.target.value)}/> */}
					<input type="email" placeholder="Enter the EmailID" name="UserName" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setemail(e.target.value)}  />
					<input type="email" placeholder="Enter the Password" name="UserName" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setPass(e.target.value)}  />
					</div>
					
					<button className="sub font-bold ml-[30px]" onClick={HandleSubmit}>Submit</button>
					<div className="mt-[25px] ml-[30px] text-xl font-semibold">
							<h1>Don't Have Account?<Link to={'/StudentReg'} className="text-blue-700 mx-[10px]">Register</Link></h1>
					</div>
					</div>
				</div>
			</div>
		</div>	
	)
}

export default LoginToDash;