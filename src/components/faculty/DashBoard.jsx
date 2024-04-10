import { useEffect, useState } from "react";
import { Images } from "../../constant/images";
import { useNavigate }   from 'react-router-dom'
const DashBoard = () => {
	const Navigate = useNavigate();
	const [Loaded, setLoaded] = useState(true)
	
	useEffect(() => {
		let FacultyId = localStorage.getItem("facultyId");
		const Type = "faculty";
		if(FacultyId) {
			fetch('http://localhost:5000/GetUserData/'+Type+'/'+FacultyId)
				.then(res => {
					return res.json();
				}).then(res => {
					console.log(res)
				})
		}
		else {
			Navigate('/FacultyLogin');
		}
	},[])
	return (
		<>
			{
				Loaded ? (
					<div className="p-0 m-0 w-[100vw] h-[100vh]">
						<div className="m-[20px] p-[15px] bg-blue-900 w-[95vw] rounded-xl">
							<h1 className="text-white text-3xl">Faculty DashBoard</h1>
						</div>
						<div className="p-[30px] absolute w-[100%] h-[100%]">
							<div className="w-[98%] flex justify-between  h-[450px] max-h-[500px] p-[20px] m-[20px]">
								<div className="basis-[25%] p-[30px] rounded-3xl bg-blue-900 text-2xl  text-white">
									<div>
										<h1>Faculty Data</h1>
									</div>
									<div>
										
									</div>
								</div>
								<div className="basis-[60%] p-[30px] rounded-3xl bg-blue-900 ">

								</div>
							</div>
							<div className="p-[30px] m-[50px] bg-blue-700 h-[100%] w-[90vw] rounded-3xl bottom-[0px]">

							</div>
						</div>
				
					</div>
				) : (
					<div className={`flex w-[100%] h-[100vh] justify-center items-center  text-white`} style={{}}>
						<div className="w-[300px] bg-blue-900 h-[100px] rounded-xl flex items-center justify-center">
							<img src={Images.Loading} alt="Loading" className="w-[35px]"/><span className="ml-[20px] text-xl">Loading Please Wait</span>
						</div>
					</div>
				)
			}
		</>
	)
}
export default DashBoard;