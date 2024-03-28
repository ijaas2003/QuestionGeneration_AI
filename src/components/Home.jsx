import { useState } from "react"
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom"

const Home = () => {
	return (
		<>
			<div className="h-[100vh] w-[100%] flex justify-center bg-back items-center p-0  bg-no-repeat bg-cover">
				<div className="flex p-[30px] flex-col h-[600px] w-[800px]  justify-between m-[30px] rounded-3xl shadow-2xl">
					<div className="basis-[45%]">
						<h1 className="text-4xl text-white">AI Powered Question Generation</h1>
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