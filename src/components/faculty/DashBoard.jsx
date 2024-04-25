import { useEffect, useState } from "react";
import { Images } from "../../constant/images";
import { Link, useNavigate } from 'react-router-dom'
import Navbar1 from "./Navbar1";
import Panel from "../../assets/panel1.png"
import { FiCopy } from 'react-icons/fi'
const DashBoard = () => {
  const Navigate = useNavigate();
  const [Loaded, setLoaded] = useState(false)
  const [FacultyData, setFacultyData] = useState();
  const [Questions, setQuestions] = useState();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let FacultyId = localStorage.getItem("facultyId");
    console.log(FacultyId)
    const Type = "faculty";
    if (FacultyId) {
      fetch('http://localhost:5000/GetUserData/' + Type + '/' + FacultyId)
        .then(res => {
          return res.json();
        }).then(res => {
          console.log(res)
          setTimeout(() => {
            setLoaded(true);
          }, 500);
          setFacultyData(res.FacultyData)
          setQuestions(res.questionsData)
        })
    }
    else {
      Navigate('/FacultyLogin');
    }
  }, [])

  console.log(Questions)
  // console.log(FacultyData)
  const studExamData = (id) => {
    console.log(id)
    localStorage.setItem('currentstudid', id);
    Navigate('/Data')
  }
 

  const copyToClipboard = (questionId) => {
    navigator.clipboard.writeText(questionId);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000); // Reset copied state after 2 seconds
  };
  return (
    <>
      {Loaded ? (
        <div className="dashboard p-0 m-0 w-[100vw] h-[100vh]  ">
          <Navbar1 />

          <div className="dash ml-[70px] mt-[40px] p-[25px] w-[90vw] rounded-xl flex ">
            <h1 className="text-white text-3xl">Publisher DashBoard</h1>

          </div>
          <div className=" absolute w-[100%] p-[50px] h-[100%]">
            <div className="w-[98%] flex justify-between  h-[370px] max-h-[500px] m-[20px]">
              <div className="dash basis-[50%] p-[30px] rounded-3xl  duration-[0.5s] text-2xl  text-white">
                <div className="mb-[40px]">
                  <h1>Publisher Details</h1>
                </div>
                <div className="text-lg">
                  <div className="s">
                    <label>Faculty Name : {FacultyData.faculty_name}</label>
                  </div>
                  <hr></hr>
                  <div className="s">
                    <label>Faculty Email : {FacultyData.faculty_email}</label>
                  </div>
                  <hr></hr>
                  <div className="s">
                    <label>Faculty Department : {FacultyData.faculty_dept}</label>
                  </div>
                  <hr></hr>
                  <div className="s">
                    <label>Faculty Taught : {FacultyData.faculty_taught}</label>
                  </div>
                </div>
              </div>
              <div className="dash basis-[45%] p-[30px] rounded-3xl  duration-[0.5s] items-center ">
                <img src={Panel} className=" h-[400px] w-[500px] ml-[60px] mt-[-30px]" />
              </div>
            </div>
            <div className="dash h-[380px] my-[70px] rounded-xl p-6 overflow-auto" style={{ maxHeight: "400px" }}>
              <div >
                <div className="flex">
                  <div>
                    <h1 className="text-2xl text-white mb-4">Posted Questions Information</h1>
                  </div>
                  <div>
                    <Link to='/Exam'>
                      <button className="but ml-[800px] h-[40px] w-[150px] text-white font-bold rounded">Create+</button>
                    </Link>
                  </div>


                </div><br></br><br></br>
                <div className="overflow-x-auto">
                  <table className="table-auto w-full text-white font-bold text-[15px]">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Test Posted Date </th>
                        <th className="px-4 py-2">Test Ended Date </th>
                        <th className="px4 py2">Duration</th>
                        <th className="px4 py2">Que Count</th>
                        <th className="px4 py2">Question ID </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Questions.map((item, index) => (
                        <tr key={index} id={item.QuestionId} onClick={() => studExamData(item.QuestionId)}>
                          <td className="border px-4 py-2 hover cursor-pointer">{item.StartingTime}</td>
                          <td className="border px-4 py-2 hover cursor-pointer">{item.EndingTime}</td>
                          <td className="border px-4 py-2 hover cursor-pointer">{item.Duration}</td>
                          <td className="border px-4 py-2 hover cursor-pointer">{item.quecount}</td>
                          <td className="border relative px-4 py-2 hover cursor-pointer">
                          {item.QuestionId}
                          <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                            onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(item.QuestionId)
                              }
                            }
                          >
                            <FiCopy />
                          </button>
                            {copied && <span className="text-green-500 ml-2">Copied!</span>}
                        </td>
                          {/* Add more table cells with data as needed */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`flex w-[100%] h-[100vh] justify-center items-center  text-white`} style={{}}>
          <div className="w-[300px] bg-blue-900 h-[100px] rounded-xl flex items-center justify-center">
            <img src={Images.Loading} alt="Loading" className="w-[35px]" /><span className="ml-[20px] text-xl">Loading Please Wait</span>
          </div>
        </div>
      )
      }
    </>
  )
}

export default DashBoard;
