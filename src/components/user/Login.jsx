import { useState } from "react";
const Login = () => {
	const [username, setUser] = useState('');
	const [Password, setPass] = useState('');
	console.log(username, Password);
	const HandleSubmit = () => {
		fetch('http://localhost:5000/Login', {
			method:"POST",
			headers:{
				"content-Type":"application/json"
			},
			body:JSON.stringify({username, Password})
		}).then(res => {
			return res.json()
		}).then(res => {
			console.log(res);
		})
	}
	return(
		<div>
			<div className="ma1 h-[100vh] w-[100%]  flex justify-center items-center ">
				<div className="ma2  bg-white h-[450px] w-[450px] opacity-60 rounded-3xl p-[30px]  ">
					<h1 className="lo text-[25px] font-bold text-center py-[10px]">Student Login</h1>
					<input type="text" name="UserName" className="inp h-10 w-full relative mt-[30px] bg-black"  />
				</div>
			</div>
		</div>	
	)
}
export default Login;
