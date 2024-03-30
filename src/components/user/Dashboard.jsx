
import "./Dashboard.css";
import { useState } from "react";
import Navbar from "./Navbar";
import { data, data2 } from "./MyCharts";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const DashBoard = () => {
  return (
    <section className="alls">
    <Navbar />
      <div className="container">
        <aside className="w-[250px] mr-[20px]">
          <div className="profile">
            <div className="top">
              <div className="profile-photo">
                <img src="./images/profile-1.jpg" alt="" />
              </div>
              <div className="info">
                <p>
                  Hey, <b className="font-bold">Alex</b>{" "}
                </p>
              </div>
            </div>
            <div className="about text-lg">
              <h5 className="b">Name</h5>
              <p>Alex</p>
              <h5 className="b">Course</h5>
              <p>Computer Science & Engineering</p>
              <h5 className="b">Contact</h5>
              <p>1234567890</p>
              <h5 className="b">Email</h5>
              <p>unknown@gmail.com</p>
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
