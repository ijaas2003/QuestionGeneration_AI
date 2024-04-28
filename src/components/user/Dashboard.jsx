
import "./Dashboard.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { data, data2 } from "./MyCharts";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import stu from '../../assets/stu.jpg'
import CircularProgressBar from "./Circular";
import { useNavigate } from "react-router-dom";
import { Images } from "../../constant/images";
ChartJS.register(ArcElement, Tooltip, Legend);
const DashBoard = () => {
  const [Loaded, setLoaded] = useState(false)
  const [userdata,setuserdata] = useState();
  const [attend, setattend] = useState([]);
  const navigate = useNavigate();
  useEffect(() =>{
    let userId=localStorage.getItem('userId')
    if(userId == null) {
      return navigate('/StudentLogin');
    }
    console.log(userId)
    var Type = "user"
    if (userId){
      fetch('http://localhost:5000/GetUserData/'+Type+'/'+userId)
      .then(res=>{
        return res.json();
      }).then(res=>{
        console.log(res)
        setTimeout(() => {
          setLoaded(true);
        }, 500);
        setuserdata(res.Userinfo)
        setattend(res.Attended)
      })
    }
  },[])
  return (
    <section className="alls">
      <Navbar />
      {
        Loaded ? (
          
      <div className="container">

        <aside className="w-[280px] mr-[20px]">
          <div className="profile">
            <div className="top">
              <div className="profile-photo">
                <img src={stu}  />
              </div>
              <div className="info">
                <p className="he">
                  Hey, <b className="lx font-bold ">{userdata && userdata.student_name}</b>{" "}
                </p>
              </div>
            </div>
            <div className="about text-lg">
              <h5 className="b">Name</h5>
              <p>{userdata && userdata.student_name}</p>
              <h5 className="b">Dept</h5>
              <p>{userdata && userdata.student_dept}</p>
              <h5 className="b">Email</h5>
              <p>{userdata && userdata.student_email}</p>
            </div>
          </div>
        </aside>

        <main>
          <h1 className="b text-2xl">Previous Exam Scores</h1>
          {
            attend.map((data, index) => (
              <div key={ index }>
                  <div className="subjects text-xl">
                    <div className="eg">
                      <div className="flex flex-col">
                        <div className="flex items-baseline h-[50px]">
                          <div className="flex">
                            <span className="material-icons-sharp h-[35px] w-[35px] m-[10px]">architecture</span>
                            <h3>{data.course}</h3>
                          </div>
                          <div className="mx-[20px]">
                            <div>
                              <h2 className="ml-[350px]">This is score of each level and percentage of total score</h2>
                            </div>
                          </div>
                        </div>
                        <div className="flex p-[10px] h-[300px]">
                            <div className="basis-[50%] Grp m-[20px] ">
                            <div>
                              <h1>Score : {data.score}/{(data.Easy * 4) + (data.Medium * 7) + (data.Hard * 10)}</h1>
                            </div>
                            <div>
                              <h1>Attended Questions : { data.Questionsattented }</h1>
                            </div>
                            <div>
                              <h1>Easy : { data.Easy }/{ data.Questionsattented }</h1>
                            </div>
                            <div>
                              <h1>Medium : { data.Medium }/{ data.Questionsattented }</h1>
                            </div>
                            <div>
                              <h1>Hard : { data.Hard }/{ data.Questionsattented }</h1>
                            </div>
                            <div>
                              <h1>Percentage : { data.percent }/100</h1>
                            </div>
                          </div>
                          <div className="basis-[50%] flex s">
                            <div className="chart-container h-[300px]">
                              <CircularProgressBar percentage={ data.percent }/>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
              </div>
            ))
          }
          
        </main>
      </div>
        ) : (
          <div className={`flex w-[100%] h-[100vh] justify-center items-center  text-white`} style={{}}>
            <div className="w-[300px] bg-blue-900 h-[100px] rounded-xl flex items-center justify-center">
              <img src={Images.Loading} alt="Loading" className="w-[35px]" /><span className="ml-[20px] text-xl">Loading Please Wait</span>
            </div>
          </div>
        )
      }
    </section>
  );
};
export default DashBoard;
