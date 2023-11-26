import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const StoryPage=({page})=>{

  const fadeIn = useSpring({
    to:{opacity: 1}, // Ending opacity
    from: { opacity: 0 }, // Starting opacity
    config: { duration: 1500 }, // Duration of the animation in milliseconds
  });

  const slideInUp = useSpring({
    from: { opacity: 0, transform: 'translateY(100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 150, friction: 50 }, // Adjust the tension and friction for the desired effect
  });

  useEffect(()=>{
    fadeIn.opacity.reset(1);
    slideInUp.opacity.reset(1);
    slideInUp.transform.reset(1);
  })
return(
  <animated.div style={fadeIn} className="StoryPage">
    {page.content}
    <br/>
    {page.images?.map((i)=>(
      <animated.img className="images" style={slideInUp} src={i.img}/>
    ))}
  </animated.div>
);
}
export default StoryPage;