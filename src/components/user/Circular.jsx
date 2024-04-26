import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircularProgressBar = ({ percentage }) => {
  return (
	
	<div style={{ width: 200, height: 200 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          strokeLinecap: 'round', // Make the progress bar rounded
          textSize: '20px', // Adjust text size
          pathTransitionDuration: 0.5, // Smooth animation duration
          pathColor: '#7380ec', // Progress bar color
          textColor: '#7380ec', // Text color
          trailColor: '#d2d3d4', // Background color
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
