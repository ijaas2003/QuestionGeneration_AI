import { useEffect, useState } from "react";
import { Images } from "../../constant/images";
import { Link, useNavigate }   from 'react-router-dom'
import Navbar1 from "./Navbar1";
const DashBoard = () => {
	const Navigate = useNavigate();
	const [Loaded, setLoaded] = useState(false)
	const [FacultyData, setFacultyData] = useState();
	const [Questions, setQuestions] = useState();
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
					setFacultyData(res.FacultyData)
					setQuestions(res.questionsData)
				})
		}
		else {
			Navigate('/FacultyLogin');
		}
	},[])
	console.log(Questions)
	// console.log(FacultyData)
	return (
		<>
			{
				Loaded ? (
					<div className="dashboard p-0 m-0 w-[100vw] h-[100vh]  ">
						<Navbar1 />
						<h1>h</h1>
						<div className="dash ml-[70px] mt-[40px] p-[25px] w-[90vw] rounded-xl flex ">
							<h1 className="text-white text-3xl">Publisher DashBoard</h1>
							
						</div>
						<div className=" absolute w-[100%] p-[50px] h-[100%]">
							<div className="w-[98%] flex justify-between  h-[370px] max-h-[500px] m-[20px]">
								<div className="dash basis-[35%] p-[30px] rounded-3xl  duration-[0.5s] text-2xl  text-white">
									<div className="mb-[40px]">
										<h1>Publisher Details</h1>
									</div>
									<div className="text-lg">
										<div className="s">
											<label>Faculty Name : {FacultyData.faculty_name}</label>
										</div>
										<hr></hr>
										<div className="s">
											<label>Faculty Email : {FacultyData.faculty_email}</label>
										</div>
										<hr></hr>
										<div className="s">
											<label>Faculty Department : {FacultyData.faculty_dept}</label>
										</div>
										<hr></hr>
										<div className="s">
											<label>Faculty Taught : {FacultyData.faculty_taught}</label>
										</div>
									</div>
								</div>
								<div className="dash basis-[60%] p-[30px] rounded-3xl  duration-[0.5s] ">
									
								</div>
							</div>
							<div className="dash h-[380px] my-[70px] rounded-xl p-6 overflow-auto" style={{ maxHeight: "400px" }}>
								<div >
									<div className="flex">
									<div>
									<h1 className="text-2xl text-white mb-4">Posted Questions Information</h1>
									</div>
									<div>
									<Link to='/Exam'>
									<button className="but ml-[1200px] h-[40px] w-[150px] text-white font-bold rounded">Test</button>
									</Link>
									</div>
								
									</div><br></br><br></br>
									
								<div className="overflow-x-auto">
									<table className="table-auto w-full text-white font-bold text-[15px]">
										<thead>
											<tr>
												<th className="px-4 py-2">Test Posted Date </th>
												<th className="px-4 py-2">Test Ended Date </th>
												<th className="px4 py2">Duration</th>
												<th className="px4 py2">Question ID </th>
											</tr>
										</thead>
										<tbody>
											{/* Iterate over your data and render table rows */}
											{Questions.map((item, index) => (
											<tr key={index}>
												<td className="border px-4 py-2">{item.StartingTime}</td>
												<td className="border px-4 py-2">{item.EndingTime}</td>
												<td className="border px-4 py-2">{item.Duration}</td>
												<td className="border px-4 py-2">{item.QuestionId}</td>
												{/* Add more table cells with data as needed */}
											</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
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