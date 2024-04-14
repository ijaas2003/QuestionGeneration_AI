import { useState } from "react";
import { toast } from 'react-toastify'
const Exam = () => {
	const [select, setSelect] = useState(null);
	const success = (msg) => toast.success(msg)  
	const error = (msg) => toast.error(msg)  
	const handleUpload = () => {
		let FacultyId = localStorage.getItem('facultyId');
		const formData = new FormData();
		formData.append('file', select);
		formData.append('facultyId', FacultyId);

		// Get values for starting time, ending time, and duration
		const startingTime = document.getElementById('startingTime').value;
		const endingTime = document.getElementById('endingTime').value;
		const duration = document.getElementById('duration').value;

		// Append them to the FormData
		formData.append('startingTime', startingTime);
		formData.append('endingTime', endingTime);
		formData.append('duration', duration);
		// print(formData)
		fetch('http://localhost:5000/upload', {
			method: 'POST',
			body: formData
		})
		.then(response => {
				return response.json()
			}).then((res) => {
				console.log(res);
				if(res.message) {
					success(res.message)
					
				}
			}).catch(error => {
				console.error('Error:', error);
				error(error)
			});
	};
	return (
     <section>
          <div className="main bg-white h-[100vh]">
               <div className="m1 h-[100vh] flex justify-center items-center">
                    <div className="m2 bg-slate-300 h-[70%] w-[35%] justify-center rounded-3xl">
                    <div className="head w-[100%]">
                         <h1 className="he text-[25px] text-neutral-700 font-bold text-center ">Test</h1>
                    </div>
                    <div className="m3 text-slate-900">
                         <label className="lab mt-[30px] ml-[40px] text-[18px] font-bold">Input File</label>
                         <input type="file" className="lab mt-[30px] ml-[70px] font-bold" required onChange={(e) => setSelect(e.target.files[0])} /><br></br>
                         <label className="lab mt-[30px] ml-[40px] text-[18px] font-bold">Starting Time</label>
                         <input type="datetime-local" id="startingTime" className="inp h-10 w-half ml-[30px] mt-[30px] font-bold" required /><br></br>
                         <label className="lab mt-[30px] ml-[40px] text-[18px] font-bold">Ending Time</label>
                         <input type="datetime-local" id="endingTime" className="inp h-10 w-half ml-[40px] mt-[30px] font-bold" required /><br></br>
                         <label className="lab mt-[30px] ml-[40px] text-[18px] font-bold">Duration</label>
                         <input type="time" id="duration" className="inp h-10 w-[210px] ml-[70px] mt-[30px] font-bold" required /><br></br>
                    <button className="sub1 ml-[180px] font-bold" onClick={handleUpload}>Submit</button>
                    </div>
                    </div>
               </div>
          </div>
     </section>
	);
};

export default Exam;
