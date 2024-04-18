import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";
import { Images } from "../constant/images";


const Home = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-cover bg-homie" >
            <div className="flex p-8 h-4/5 w-4/5 justify-between rounded-3xl shadow-2xl bg-gradient-to-b from-gray-800 to-gray-900 text-white">
                <div className="w-1/2 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold">AI Powered Question Generation</h1>
						<div className="py-[30px]">
                    <label className="text-2xl mt-8">
                        Welcome to AI World
                        <div>It Generates Questions from</div>
                        <span className="text-LightRed font-bold">
                            <Typewriter
                                words={['Schooling', 'College', 'Competitive', 'Adaptive']}
                                loop={Infinity}
                                cursor
                                cursorStyle='##'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span> World
                    </label>
						</div>
						<div className="text-center py-2 bg-LightRed cursor-pointer mx-2 w-1/2 text-white font-semibold rounded-md">
							<h1>Get Started</h1>
						</div>
                </div>
                <div className="w-1/2 bg-LightGreen text-White p-8 rounded-2xl shadow-xl">
                    <div className="p-4 flex flex-col">
                        <h1 className="text-4xl font-bold">Choose Type of <span className="text-LightRed">l</span><span className="text-black">o</span><span className="text-yellow-500">g</span><span className="text-blue-600">i</span><span className="text-pink-500">n</span></h1>
							<div className="items-center">
								<img src={Images.Gif} className="ml-[40px] h-[300px]"/>
							</div>
                    </div>
                    <div className="p-4 flex bg-gray-800 rounded-xl">
                        <Link to="/StudentLogin" className="text-center py-2 bg-red-600 mx-2 w-1/2 text-white font-semibold rounded-md">Student Login</Link>
                        <Link to="/FacultyLogin" className="text-center py-2 bg-purple-600 mx-2 w-1/2 text-white font-semibold rounded-md">Faculty Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
