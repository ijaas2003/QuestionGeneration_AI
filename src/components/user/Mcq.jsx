import { useEffect, useState } from "react";

const Mcq =()=>{
    var QuestionData = localStorage.getItem('currentque')
    var testToken = localStorage.getItem('TestToken');
    var QuestionGen = JSON.parse(QuestionData);
    console.log(QuestionGen); 
    const HandleChange = () => {
        fetch('http://localhost:5000/getquestion', {
            method: "POST",
            headers:{
				"content-Type":"application/json"
			},
            body: JSON.stringify(testToken, duration, )
        })
    }

    return(
        <div className="back bg-white h-[100vh] font-sans">
            <div className="b1 h-[300px]">
            <label className="du">Duration :</label>
            </div>
            <div className="h-[60%] w-[100%] flex justify-center items-center">
            <div className="b2 h-[500px] w-[60%]">
                <h1 className="que">{QuestionGen.Question}</h1>
                <div className="line h-[1px] w-[100%] mt-[80px] bg-black"></div>
                    <div>
                        <div className="op1"> 
                            <label className="text-black text-3xl"><input type="radio" value={`${QuestionGen.Distractors[0]}`} className="ra1 " name="option" ></input>  {QuestionGen.Distractors[0]}</label>
                        </div>
                        <div className="op1 "> 
                            <label className="text-black text-3xl"><input type="radio" value={`${QuestionGen.Distractors[1]}`} className="ra1" name="option"></input>  {QuestionGen.Distractors[1]}</label>
                        </div>
                        <div className="op1 "> 
                            <label className="text-black text-3xl"><input type="radio" value={`${QuestionGen.Distractors[2]}`} className="ra1" name="option"></input>  {QuestionGen.Distractors[2]}</label>
                        </div>
                        <div className="op1 cursor-pointer"> 
                            <label className="text-black text-3xl"><input type="radio" value={`${QuestionGen.Distractors[3]}`} className="ra1" name="option"></input>  {QuestionGen.Distractors[3]}</label>
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