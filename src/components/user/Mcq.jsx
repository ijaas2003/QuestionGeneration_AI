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
        <div className="back bg-white h-[100vh]">
            <div className="b1 h-[300px]">
            <label className="du">Duration :</label>
            </div>
            <div className="h-[60%] w-[100%] flex justify-center items-center">
            <div className="b2 h-[500px] w-[600px]">
                    <h1 className="que">Sample Question </h1>
                    <div className="line h-[1px] w-[600px] mt-[80px] bg-black"></div>
                    <div>
                        <div className="op1 "> 
                            <label><input type="radio" value="op1" className="ra1" ></input>  option 1</label>
                        </div>
                        <div className="op1 "> 
                            <label><input type="radio" value="op1" className="ra1" ></input>  option 2</label>
                        </div>
                        <div className="op1 "> 
                            <label><input type="radio" value="op1" className="ra1" ></input>  option 3</label>
                        </div>
                        <div className="op1 "> 
                            <label><input type="radio" value="op1" className="ra1" ></input>  option 4</label>
                        </div>
                        <div className="next">
                            <button>Next</button>
                        </div>
                        
                    </div>
                </div>
            
            </div>
                
                

                
            
       </div> 
    )

}
export default Mcq;