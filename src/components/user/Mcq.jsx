import { useEffect, useState } from "react";

const Mcq =()=>{
    // const[question,setquestion]=useState();
    // useEffect(()=>{
    //     fetch('http://localhost:5000/FacultyRegister',{
    //         method:"POST",
    //         headers:{
    //             "content-type":"applocation/json"
    //         },
    //     }).then(res()=>{
    //         res.
    //     })
    // })



    return(
        <div className="back bg-white h-[100vh] font-sans">
            <div className="b1 h-[300px]">
            <label className="du">Duration :</label>
            </div>
            <div className="h-[60%] w-[100%] flex justify-center items-center">
            <div className="b2 h-[500px] w-[60%]">
                <h1 className="que">How has the state government been proactive in promoting industrial development?</h1>
                <div className="line h-[1px] w-[100%] mt-[80px] bg-black"></div>
                    <div>
                        <div className="op1"> 
                            <label className="text-black text-3xl"><input type="radio" value="op1" className="ra1 " name="option" ></input>  Policies</label>
                        </div>
                        <div className="op1 "> 
                            <label className="text-black text-3xl"><input type="radio" value="op1" className="ra1" name="option"></input>  reforms</label>
                        </div>
                        <div className="op1 "> 
                            <label className="text-black text-3xl"><input type="radio" value="op1" className="ra1" name="option"></input>  Advertizement</label>
                        </div>
                        <div className="op1 cursor-pointer"> 
                            <label className="text-black text-3xl"><input type="radio" value="op1" className="ra1" name="option"></input>  Promotions</label>
                        </div>
                        <div className="flex justify-center">
                            <div className="next">
                                <button>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    )

}
export default Mcq;