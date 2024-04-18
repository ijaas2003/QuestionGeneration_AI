import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";
import { Images } from "../../constant/images";

const Activity =() =>{
    return(
        <div>
        <div className="act1 h-screen flex justify-center items-center bg-cover bg-act" >
            <div className="flex p-8 h-3/5 w-3/5 justify-between rounded-3xl shadow-2xl bg-gradient-to-b from-gray-800 to-gray-700 text-white">
                
                <div className="act2 w-1/2  text-White p-8 rounded-2xl shadow-xl">
                    <div className="p-4 flex flex-col ">
							<div className="items-center">
								<img src={Images.Exam} className=" h-[400px] mt-[-110px] "/>
							</div>
                        <div className="p-3 flex bg-gray-800 rounded-xl w-[250px] ml-[55px] ">
                        <Link to="/McqLogin" className="text-center text-[15px] py-2 bg-pink-600 mx-2 w-[400px] text-white font-semibold rounded-md">Take Exam</Link>
                        </div> 
                    </div>
                </div>
                <div className="act2 w-1/2  text-White p-8 rounded-2xl shadow-xl ml-[10px]">
                    <div className="p-4 flex flex-col">
							<div className="items-center ">
								<img src={Images.Dash} className=" h-[250px] mb-[20px] "/>
							</div>
                    </div>
                    <div className="p-3 flex bg-gray-800 rounded-xl w-[250px] mt-[10px] ml-[70px] ">
                        <Link to="/StudentDashboard" className="text-center py-2  text-[15px] bg-pink-600 mx-2 w-[400px] text-white font-semibold rounded-md">Dashboard</Link>
                        </div> 
                </div>
            </div>
        </div>
        </div>
    )
}
export default Activity;