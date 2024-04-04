
const Exam = () => {
	
	return (
		<section>
			<div className="main bg-white h-[100vh]">
				<div className="m1 h-[100vh] flex justify-center items-center">
					<div className="m2 bg-slate-300 h-[50%] w-[50%] justify-center rounded-3xl  flex relative">
						<div>
						<h1 className="he text-[25px] text-neutral-700 font-bold text-center ">Test  </h1>
						<label className="lab   mt-[30px] font-bold">Starting Time</label><input type="text" placeholder="Enter the Stating Time"  className="inp h-10 w-full  mt-[30px] font-bold" />
						</div>
						
					</div>
				</div>
			</div>
		</section>
	)
}
export default Exam;