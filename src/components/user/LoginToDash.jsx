import { useState } from "react";
import log from '../../assets/login.png';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const LoginToDash = () => {
	const success = (msg) => toast.success(msg);
     const error = (msg) => toast.error(msg);
     const navigate = useNavigate();
     const [email, setemail] = useState('');
     const [pass, setPass] = useState('');

	const HandleSubmit = () => {
		fetch('http://localhost:5000/LoginToDash', {
			method: "POST",
			headers: {
				"content-Type": "application/json"
			},
			body: JSON.stringify({ email, pass })
		}).then(res => res.json())
			.then(res => {
				if (res.message) {
					success(res.message)
					localStorage.setItem('userId', res.userId);
					localStorage.setItem('type', 'user');
					navigate('/Activity');
				} else {
					error(res.error);
				}
			});
		};
	return (
		<div>
			<div className="ma1 h-[100vh] w-[100%]  flex justify-center items-center ">
               <div className="ma2 bg-white h-[350px] w-[850px] flex opacity-60 rounded-3xl relative">
                    <div className="absolute top-5 left-10 rounded-full hover:bg-purple-500 cursor-pointer p-[15px]">
                    <Link to="/" className="text-purple-500 hover:text-white">
                         <FaHome className="text-3xl" />
                    </Link>
                    </div>
                    <div className="basis-[40%]">
                    <img src={log} className="login-Pg mt-[85px]"></img>
                    </div>
                    <div className="basis-[60%]">
					<h1 className="lo text-[25px] font-bold text-center py-[10px]">Student Login</h1>
					<div className="px-[40px]">
						<input type="email" placeholder="Enter the EmailID" name="UserName" className="inp h-10 w-full mt-[30px] font-bold" onChange={(e) => setemail(e.target.value)} />
						<input type="password" placeholder="Enter the Password" name="UserName" className="inp h-10 w-full mt-[30px] font-bold" onChange={(e) => setPass(e.target.value)} />
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
