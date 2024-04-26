import { useState } from "react";
import log from '../../assets/login.png'
import{ toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
const StudentReg = () => {
	const success = (msg) => toast.success(msg);
	const error = (msg) => toast.error(msg);
	const navigate = useNavigate();
	const [username, setUser] = useState('');
	const [email, setemail] = useState('');
	const [Dept, setDept] = useState('');
	const [password,setPassword] =useState('');
	const [rePassword,setRePassword] =useState('');
	const HandleSubmit = () => {
		fetch('http://localhost:5000/studentReg', {
			method:"POST",
			headers:{
				"content-Type":"application/json"
			},
			body:JSON.stringify({username, email,Dept, password, rePassword})
		}).then(res => {
			return res.json()
		}).then(res => {
			if(res.message) {
				success(res.message)
				console.log(res.Token)
				navigate('/StudentLogin')
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
				<div className="ma2  bg-white h-[550px] w-[850px] flex opacity-60 rounded-3xl p-[30px]  relative">
					<div className="basis-[40%] ">
					<img src={log} className="login-Pg mt-[85px]"></img>
					</div>
					<div className="basis-[60%]">
					<h1 className="lo text-[25px] font-bold text-center py-[10px]">Student Credentials</h1>
					<div className="px-[40px]">
					<input type="text" placeholder="Enter the Username" name="UserName" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setUser(e.target.value)}/>
					<input type="email" placeholder="Enter the EmailID" name="Email" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setemail(e.target.value)}  />
					<input type="text" placeholder="Enter the Dept" name="Course" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setDept(e.target.value)}  />
					<input type="password" placeholder="Enter the Password" name="Password" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setPassword(e.target.value)}/>
					<input type="password" placeholder="Enter the Re-Password" name="Re-Password" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setRePassword(e.target.value)}/>
					</div>
						<button className="sub font-bold" onClick={HandleSubmit}>Submit</button>
						<div className="mt-[25px] ml-[30px] text-xl font-semibold">
							<h1>Already Have Account?<Link to={'/StudentLogin'} className="text-blue-700 mx-[10px]">Login</Link></h1>
					</div>
					</div>
					
				</div>
				
			</div>
		</div>	
	)
}
export default StudentReg;
