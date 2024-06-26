import { useEffect, useState } from "react";
import log from '../../assets/login.png'
import{ toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
	const success = (msg) => toast.success(msg);
	const error = (msg) => toast.error(msg);
	const navigate = useNavigate();
	// const [username, setUser] = useState('');
	const [email, setemail] = useState('');
	const [pass, setPass] = useState('');
	const [Dept, setCourse] = useState('');
	const [queid,setqueid] =useState('');
	
	console.log(email,Dept,queid);
	localStorage.setItem('TestToken', '');
	var Id = localStorage.getItem('userId');
	const HandleSubmit = () => {
		var testToken = localStorage.getItem('TestToken');
		fetch('http://localhost:5000/getquestion', {
			method:"POST", 
			headers:{
				"content-Type":"application/json"
			},
			body:JSON.stringify({ email, Id, pass, Dept, queid, testToken })
		}).then(res => {
			return res.json() 
		}).then(res => {
			if(res.message) { 
				success(res.message)
				localStorage.setItem('TestToken',res.startTest);
				var l = JSON.stringify(res.questionStructure)
				var duration = res.duration;
				localStorage.setItem('currentque', l)
				localStorage.setItem('duration', duration);
				navigate('/Mcq')
			}
			else {
				error(res.error)
			}
		})
	}
	return(
		<div>
			<div className="ma1 h-[100vh] w-[100%]  flex justify-center items-center ">
				<div className="ma2  bg-white h-[480px] w-[850px] flex opacity-60 rounded-3xl p-[30px]  relative">
					<div className="basis-[40%] ">
					<img src={log} className="login-Pg mt-[85px]"></img>
					</div>
					<div className="basis-[60%]">
					<h1 className="lo text-[25px] font-bold text-center py-[10px]">Student Credentials</h1>
					<div className="px-[40px]">
					<input type="email" placeholder="Enter the EmailID" name="Email" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setemail(e.target.value)}  />
					<input type="password" placeholder="Enter the Password" name="UserName" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setPass(e.target.value)}  />
					<input type="text" placeholder="Enter the Course" name="Course" className="inp h-10 w-full  mt-[30px] font-bold" onChange={(e) => setCourse(e.target.value)}  />
					<input type="text" placeholder="Enter the Question ID" name="Question Id" className="inp h-10 w-full  mt-[30px] font-bold"  onChange={(e) => setqueid(e.target.value)}/>
					</div>
						<button className="sub font-bold ml-[30px]" onClick={HandleSubmit}>Submit</button>
						<div className="mt-[25px] ml-[30px] text-xl font-semibold">
							<h1>Need to go Activity?<Link to={'/Activity'} className="text-blue-700 mx-[10px]">Activity</Link></h1>
					</div>
					</div>
					
				</div>
				
			</div>
		</div>	
	)
}
export default Login;
