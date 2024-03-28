import { useState } from "react"
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-homie bg-cover">
            <div className="flex p-8 h-4/5 w-4/5 justify-between rounded-3xl shadow-2xl bg-gradient-to-b from-gray-800 to-gray-900 text-white">
                <div className="w-1/2 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold">AI Powered Question Generation</h1>
                    <label className="text-2xl mt-8">
                        Welcome to AI World
                        <div>It Generates Questions from</div>
                        <span className="text-LightRed font-bold">
                            <Typewriter
                                words={['Schooling', 'College', 'Competitive', 'Adaptive']}
                                loop={Infinity}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span> World
                        
                    </label>
                </div>
                <div className="w-1/2 bg-LightGreen text-White p-8 rounded-2xl shadow-xl">
                    <div className="p-4">
                        <h1 className="text-4xl font-bold">Choose Type of Login</h1>
                    </div>
                    <div className="p-4 flex bg-gray-800 rounded-xl">
                        <Link to="/StudentLogin" className="text-center py-2 bg-red-600 mx[10px] px-[10px] mx-[10px] w-[50%] text-white font-semibold rounded-md">Student Login</Link>
                        <Link to="/FacultyLogin" className="text-center py-2 bg-Purple w-[50%] mx-[10px] text-white font-semibold rounded-md">Faculty Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
