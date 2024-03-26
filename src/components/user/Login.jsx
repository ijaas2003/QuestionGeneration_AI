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
		<>
			<input onChange={(e) => setUser(e.target.value)}/>
			<input onChange={(e) => setPass(e.target.value)}/>
			<button onClick={HandleSubmit}>Submit</button>
		</>	
	)
}
export default Login;
