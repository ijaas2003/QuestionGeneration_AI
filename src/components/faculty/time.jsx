import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TestPage = ({sec}) => {
  const [timeRemaining, setTimeRemaining] = useState(sec); 
  const navigate=useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime === 0) {
          clearInterval(timer);
          submitTest();
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const submitTest = () => {
    toast.success("Test Ended ")
    navigate('/StudentDashBoard')
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
      <span className='text-black'>  {formatTime(timeRemaining)}</span>
  );
};

export default TestPage;
