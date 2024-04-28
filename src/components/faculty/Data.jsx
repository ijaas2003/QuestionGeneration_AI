import { useEffect, useState } from 'react'
const Data = () => {
	const [studData, setStudData] = useState([]);
	const studentexamid = localStorage.getItem('currentstudid');
	console.log(studentexamid)
	useEffect(() => {
		var type = "studentexamdata"
		fetch('http://localhost:5000/GetUserData/'+type+'/'+studentexamid)
			.then(res => {
				return res.json()
			}).then(res => {
				console.log(res.Studentexam);
				setStudData(res.Studentexam);
			})
	}, [])
	return (

		<div className="h-[100vh] w-[100%] bg-[#f9f6ee] p-[3%]">
			<div className="my-[3%] text-gray-800 font-normal">
				<h1 className="text-2xl font-bold mb-4 underline">Student Data</h1>
			</div>
			<div className="overflow-x-auto rounded-md shadow-xl text-xl">
					<table className="table-auto w-full">
						<thead>
								<tr className="bg-gray-800 text-white">
								<th className="px-4 py-6">S.No</th>
								<th className="px-4 py-6">Student Name</th>
								<th className="px-4 py-6">Student Email</th>
								<th className="px-4 py-6">Student Department</th>
								<th className="px-4 py-6">Student Course</th>
								<th className="px-4 py-6">Student Question Id</th>
								<th className="px-4 py-6">Questions Attended</th>
								<th className="px-4 py-6">Student Score</th>
							</tr>
						</thead>
						<tbody className="text-center">
							{
								studData.map((data, index) => (
									<tr key={index} className={index % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'}>
										{/* <td className="border px-4 py-2">{index}</td> */}
										<td className="border px-4 py-4">{index+1}</td>
										<td className="border px-4 py-4">{data.name}</td>
										<td className="border px-4 py-4">{data.email}</td>
										<td className="border px-4 py-4">{data.dept}</td>
										<td className="border px-4 py-4">{data.course}</td>
										<td className="border px-4 py-4">{data.QueId}</td>
										<td className="border px-4 py-4">{data.Questionsattented}</td>
										<td className="border px-4 py-4">{data.percent}</td>
									</tr>
								))
							}
							
						</tbody>
						
					</table>
							{
								studData.length == 0 && (
									<div className='p-[30px] w-[100%]'>
										<p className='text-center justify-center items-c'>There is no data</p>
									</div>
								)
							}
				</div>
		</div>
	
	);
};
export default Data;