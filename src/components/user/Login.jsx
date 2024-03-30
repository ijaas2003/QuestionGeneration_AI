import { useState } from "react";
import log from '../../assets/login.png'
import{ toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const Login = () => {
	const success = (msg) => toast.success(msg);
	const error = (msg) => toast.error(msg);

	const navigate = useNavigate();

	const [username, setUser] = useState('');
	const [email, setemail] = useState('');
	const [queid,setqueid] =useState('');
	console.log(username, email,queid);
	const HandleSubmit = () => {
		fetch('http://localhost:5000/StudentLogin', {
			method:"POST",
			headers:{
				"content-Type":"application/json"
			},
			body:JSON.stringify({username, email, queid})
		}).then(res => {
			return res.json()
		}).then(res => {
			if(res.message) {
				success(res.message)
				navigate('/StudentDashboard')
			}
			else {
				error(res.error)
			}
			console.log(res);
		})
	}
	return(
		<div>
			<div className="ma1 h-[100vh] w-[100%]  flex justify-center items-center ">
				<div className="ma2  bg-white h-[450px] w-[850px] flex opacity-60 rounded-3xl p-[30px]  relative">
					<div className="basis-[40%] ">
					<img src={log} className="login-Pg mt-[85px]"></img>
					</div>
					<div className="basis-[60%]">
					<h1 className="lo text-[25px] font-bold text-center py-[10px]">Student Login</h1>
					<div className="px-[40px]">
					<input type="text" placeholder="Enter Username" name="UserName" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setUser(e.target.value)}/>
					<input type="email" placeholder="Enter EmailID" name="UserName" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setemail(e.target.value)}  />
					<input type="text" placeholder="Enter Question ID" name="UserName" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setqueid(e.target.value)}/>
					</div>
					
					<button className="sub font-bold" onClick={HandleSubmit}>Submit</button>
					</div>
				</div>
			</div>
		</div>	
	)
}
export default Login;
