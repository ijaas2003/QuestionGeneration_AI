import { useEffect, useState } from "react";
import TestPage from "../faculty/time";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Mcq = () => {
    const [answer, setAnswer] = useState('');
    const [change, setChange] = useState(false);
    const [time, setTime] = useState(0);
    const navigate = useNavigate();
    const [QuestionGen, setQuestionGen] = useState(JSON.parse(localStorage.getItem("currentque")));
    const duration = localStorage.getItem('duration');
    const testToken = localStorage.getItem('TestToken');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(sec => sec + 1);
            console.log(time)
        }, 1000);

        return () => clearInterval(intervalId); // Clear the interval on unmount or change
    }, [change]);

    const HandleChange = () => {
        console.log(time)
        fetch('http://localhost:5000/getquestion', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ answer, testToken, duration, queobjid: QuestionGen.Questionobjid })
        }).then((res) => res.json())
            .then(res => {
                if (res.message) {
                    toast.success(res.message);
                    navigate('/StudentDashboard');
                } else if (res.error) {
                    toast.error(res.error);
                } else {
                    setQuestionGen(res.questionStructure);
                    localStorage.setItem("currentque", JSON.stringify(res.questionStructure.Questionobjid));
                    setAnswer('');
                    setChange(!change, () => {
                        setTime(0); // Reset time to 0
                    });
                }
            }).catch(error => {
                console.error('Error fetching question:', error);
                // Handle error (e.g., display an error message)
            });
    };
    const handleOptionChange = (event) => {
        setAnswer(event.target.value);
    };

    const resetTime = () => {
        setTime(0); // Reset time to 0 when Next button is clicked
    };

    return (
        <div className="back bg-white h-[100vh] font-sans">
            <div className="b1 h-[300px]">
                <label className="du">Duration : {<TestPage sec={duration} />}</label>
            </div>
            <div className="h-[60%] w-[100%] flex justify-center items-center">
                <div className="b2 h-[500px] w-[60%]">
                    <h1 className="que">{QuestionGen.Question}</h1>
                    <div className="line h-[1px] w-[100%] mt-[80px] bg-black"></div>
                    <div>
                        <div className="op1">
                            <label className="text-black text-3xl">
                                <input type="radio" value={QuestionGen.Distractors[0]} checked={answer === QuestionGen.Distractors[0]}
                                    onChange={handleOptionChange} className="ra1" name="option" />
                                {QuestionGen.Distractors[0]}
                            </label>
                        </div>
                        <div className="op1">
                            <label className="text-black text-3xl">
                                <input type="radio" value={QuestionGen.Distractors[1]} checked={answer === QuestionGen.Distractors[1]}
                                    onChange={handleOptionChange} className="ra1" name="option" />
                                {QuestionGen.Distractors[1]}
                            </label>
                        </div>
                        <div className="op1">
                            <label className="text-black text-3xl">
                                <input type="radio" value={QuestionGen.Distractors[2]} checked={answer === QuestionGen.Distractors[2]}
                                    onChange={handleOptionChange} className="ra1" name="option" />
                                {QuestionGen.Distractors[2]}
                            </label>
                        </div>
                        <div className="op1 cursor-pointer">
                            <label className="text-black text-3xl">
                                <input type="radio" value={QuestionGen.Distractors[3]} checked={answer === QuestionGen.Distractors[3]}
                                    onChange={handleOptionChange} className="ra1" name="option" />
                                {QuestionGen.Distractors[3]}
                            </label>
                        </div>
                        <div className="flex justify-center">
                            <div className="next">
                                <button onClick={() => { HandleChange(); resetTime(); }}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mcq;
