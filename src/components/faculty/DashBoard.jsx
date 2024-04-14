import { useEffect, useState } from "react";
import { Images } from "../../constant/images";
import { useNavigate }   from 'react-router-dom'
const DashBoard = () => {
	const Navigate = useNavigate();
	const [Loaded, setLoaded] = useState(false)
	const [FacultyData, setFacultyData] = useState();
	useEffect(() => {
		let FacultyId = localStorage.getItem("facultyId");
		console.log(FacultyId)
		const Type = "faculty";
		if(FacultyId) {
			fetch('http://localhost:5000/GetUserData/'+Type+'/'+FacultyId)
				.then(res => {
					return res.json();
				}).then(res => {
					console.log(res)
					setTimeout(() => {
						setLoaded(true);
					}, 500);
					setFacultyData(res.message)
				})
		}
		else {
			Navigate('/FacultyLogin');
		}
	},[])
	// console.log(FacultyData)
	return (
		<>
			{
				Loaded ? (
					<div className="p-0 m-0 w-[100vw] h-[100vh]">
						<div className="m-[20px] p-[15px] bg-blue-900 w-[95vw] rounded-xl">
							<h1 className="text-white text-3xl">Faculty DashBoard</h1>
						</div>
						<div className="p-[30px] absolute w-[100%] h-[100%]">
							<div className="w-[98%] flex justify-between  h-[370px] max-h-[500px] p-[20px] m-[20px]">
								<div className="basis-[35%] p-[30px] rounded-3xl bg-blue-900 hover:bg-blue-700 duration-[0.5s] text-2xl  text-white">
									<div className="mb-[40px]">
										<h1>Faculty Data</h1>
									</div>
									<div className="text-lg">
										<div className="s">
											<label>Faculty Name : {FacultyData.faculty_name}</label>
										</div>
										<hr></hr>
										<div className="s">
											<label>Faculty Email :{FacultyData.faculty_email}</label>
										</div>
										<hr></hr>
										<div className="s">
											<label>Faculty Department :{FacultyData.faculty_dept}</label>
										</div>
										<hr></hr>
										<div className="s">
											<label>Faculty Taught :{FacultyData.faculty_taught}</label>
										</div>
									</div>
								</div>
								<div className="basis-[60%] p-[30px] rounded-3xl bg-blue-900 duration-[0.5s] hover:bg-blue-700">

								</div>
							</div>
							<div className="p-[30px] m-[50px] bg-blue-900 hover:bg-blue-700 duration-[0.5s] h-[100%] w-[90vw] rounded-3xl bottom-[0px]">
								
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