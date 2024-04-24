
import "./Dashboard.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { data, data2 } from "./MyCharts";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import stu from '../../assets/stu.jpg'
ChartJS.register(ArcElement, Tooltip, Legend);
const DashBoard = () => {
  const[userdata,setuserdata]=useState();
  useEffect(() =>{
    let userId=localStorage.getItem('userId')
    console.log(userId)
    var Type = "user"
    if (userId){
      fetch('http://localhost:5000/GetUserData/'+Type+'/'+userId)
      .then(res=>{
        return res.json();
      }).then(res=>{
        console.log(res)
        setuserdata(res.Userinfo)

      })
    }
  },[])
  return (
    <section className="alls">
    <Navbar />
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
          <div className="subjects text-xl">
            <div className="eg">
              <div className="flex flex-col">
                <div className="flex items-baseline h-[50px]">
                  <div className="flex">
                    <span className="material-icons-sharp h-[35px] w-[35px] m-[10px]">architecture</span>
                    <h3>Engineering Graphics</h3>
                  </div>
                  <div className="mx-[20px]">
                    <div>
                      <h2 className="ml-[350px]">This is score of each level</h2>
                    </div>
                  </div>
                </div>
                <div className="flex p-[10px] h-[300px]">
                    <div className="basis-[50%] Grp m-[20px] ">
                    <div>
                      <h1>Score : 12/14</h1>
                    </div>
                    <div>
                      <h1>Time : ds</h1>
                    </div>
                    <div>
                      <h1>Score : 12/14</h1>
                    </div>
                    <div>
                      <h1>Score : 12/14</h1>
                    </div>
                    <div>
                      <h1>Score : 12/14</h1>
                    </div>
                  </div>
                  <div className="basis-[50%] flex s">
                    <div className="chart-container h-[300px]">
                      <Pie data={data}/>
                    </div>
                  </div>
                </div>
              </div>
              <small className="text-muted">Last 24 Hours</small>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
export default DashBoard;
