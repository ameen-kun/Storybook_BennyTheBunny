import React from 'react';
import { useSpring, animated } from 'react-spring';

const ProgressBar = ({ total, current }) => {
  const progress = (current / total) * 100;

  const progressBarAnimation = useSpring({
    width: `${progress}%`,
    from: { width: '0%' },
    config: { duration: 500 },
  });

  return (
    <div className="progress-bar-container">
      <animated.div className="progress-bar" style={progressBarAnimation}></animated.div>
    </div>
  );
};

export default ProgressBar;
