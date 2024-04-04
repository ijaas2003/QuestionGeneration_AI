
const Exam = () => {
	
	return (
		<section>
			<div className="main bg-white h-[100vh]">
				<div className="m1 h-[100vh] flex justify-center items-center">
					<div className="m2 bg-slate-300 h-[70%] w-[35%] justify-center rounded-3xl  ">
						<div className="head w-[100%]">
						<h1 className="he text-[25px] text-neutral-700 font-bold text-center ">Test  </h1>
						</div>
						<div className="m3 text-slate-900">
						<label className="lab   mt-[30px] ml-[40px]  text-[18px] font-bold">Input File</label>
						<input type="file"  className="lab mt-[30px] ml-[70px] font-bold" /><br></br>
						<label className="lab   mt-[30px] ml-[40px]  text-[18px] font-bold">Starting Time</label>
						<input type="datetime-local"  className="inp  h-10 w-half   ml-[30px] mt-[30px] font-bold" /><br></br>
						<label className="lab   mt-[30px] ml-[40px] text-[18px] font-bold">Ending  Time</label>
						<input type="datetime-local"   className="inp  h-10 w-half   ml-[40px] mt-[30px] font-bold" /><br></br>
						<label className="lab   mt-[30px] ml-[40px] text-[18px] font-bold">Duration</label>
						<input type="time"  className="inp  h-10 w-[210px]  ml-[70px] mt-[30px] font-bold" /><br></br>
						<label className="lab   mt-[30px] ml-[40px]  text-[18px] font-bold">Qustion ID</label>
						<input type="text"  className="inp  h-10 w-half   ml-[60px] mt-[30px] font-bold" />
						<button className="sub1  ml-[180px] font-bold" >Submit</button>
						</div>
						
					</div>
				</div>
			</div>
		</section>
	)
}
export default Exam;