import { useState } from "react"
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom"
const Home = () => {
	return (
		<>
			<div className="h-[100vh] w-[100%] flex justify-center items-center p-0 bg-home bg-no-repeat bg-cover">
				<div className="flex p-[30px] transparent-bg h-[400px] w-[100%] justify-between m-[30px] rounded-3xl shadow-2xl">
					<div className="basis-[45%]">
						<h1 className="text-4xl">AI Powered Question Generation</h1>
						<div>

						</div>
					</div>
					<div className="basis-[45%]">
						<h1 className="text-4xl">Choose Type of Login</h1>
						<Link to={'/StudentLogin'}>Student Login</Link>
						<Link to={'/FacultyLogin'}>Faculty Login</Link>
					</div>
				</div>
				
			</div>
		</>
	)
}
export default Home