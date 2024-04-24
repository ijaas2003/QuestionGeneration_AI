import { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import TestPage from "../faculty/time";
const Mcq =()=>{
    const [answer, setAnswer] = useState('');
    const [change, setChange] = useState(false);
    const [TimeTaken, setTimeTaken] = useState(20);
    const [QuestionGen, setQuestionGen] = useState(JSON.parse(localStorage.getItem("currentque")));
    const duration = localStorage.getItem('duration');
    var testToken = localStorage.getItem('TestToken');
    console.log(testToken)
    useEffect(() => {
        console.log(QuestionGen)
    }, [change])
    console.log(QuestionGen.Questionobjid); 
    const HandleChange = () => {
        fetch('http://localhost:5000/getquestion', {
            method: "POST",
            headers:{
                "content-Type":"application/json"
            },
            body: JSON.stringify({answer,testToken, duration, queobjid:QuestionGen.Questionobjid})
        }).then((res) => {
            return res.json();
        }).then(res => {
            if(res.error){
                toast.error(res.error)
            }
            else{
                setChange(!change);
                setQuestionGen(res.questionStructure);
                localStorage.setItem("currentque", JSON.stringify(res.questionStructure.Questionobjid))
                setAnswer('')
            }
        }) 
    }
    const handleOptionChange = (event) => {
        setAnswer(event.target.value);
    };

    return(
        <div className="back bg-white h-[100vh] font-sans">
            
            <div className="b1 h-[300px]">
                <label className="du">Duration :{<TestPage sec={duration}/>}</label>
                {/* <h1 className="text-3xl font-semibold p-[20px]">Remaining: </h1> */}
            </div>
            <div className="h-[60%] w-[100%] flex justify-center items-center">
            <div className="b2 h-[500px] w-[60%]">
                
                <h1 className="que">{QuestionGen.Question}</h1>
                <div className="line h-[1px] w-[100%] mt-[80px] bg-black"></div>
                    <div>
                        <div className="op1"> 
                            <label className="text-black text-3xl"><input type="radio" value={`${QuestionGen.Distractors[0]}`} checked={answer === QuestionGen.Distractors[0]}
                  onChange={handleOptionChange} className="ra1 " name="option" ></input>  {QuestionGen.Distractors[0]}</label>
                        </div>
                        <div className="op1 "> 
                            <label className="text-black text-3xl"><input type="radio" value={`${QuestionGen.Distractors[1]}`} checked={answer === QuestionGen.Distractors[1]}
                  onChange={handleOptionChange} className="ra1" name="option"></input>  {QuestionGen.Distractors[1]}</label>
                        </div>
                        <div className="op1 "> 
                            <label className="text-black text-3xl"><input type="radio" value={`${QuestionGen.Distractors[2]}`} checked={answer === QuestionGen.Distractors[2]}
                  onChange={handleOptionChange} className="ra1" name="option"></input>  {QuestionGen.Distractors[2]}</label>
                        </div>
                        <div className="op1 cursor-pointer"> 
                            <label className="text-black text-3xl"><input type="radio" value={`${QuestionGen.Distractors[3]}`} checked={answer === QuestionGen.Distractors[3]}
                  onChange={handleOptionChange} className="ra1" name="option"></input>  {QuestionGen.Distractors[3]}</label>
                        </div>
                        <div className="flex justify-center">
                            <div className="next">
                                <button onClick={HandleChange}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )

}
export default Mcq;