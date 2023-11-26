import { useEffect, useState } from 'react';
import './App.css';
import StoryPage from './components/StoryPage';
import bunny from "./images/bunny.jpg";
import squirrel from "./images/squirrel.jpg";
import bluebird from "./images/bluebird.jpg";
import turtle from "./images/turtle.jpg";
import meadow from "./images/meadow.jpg";
import rainbow from "./images/rainbow.jpg";
import garden from "./images/garden.jpg";
import treehouse from "./images/treehouse.jpg";
import friends from "./images/friends.jpg";
import laughter from "./images/laughter.jpg";
import ProgressBar from './components/ProgressBar';

function App() {
  
  const pages=[
    {
      content:"THE ENCHANTED ADVENTURES OF BENNY: A TALE OF WISHES AND LAUGHTER",
      autochange:true,
    },
    {
      content:"Once upon a time in the cozy village of Willowbrook, there lived a little bunny named Benny. Benny was no ordinary bunny, he had the remarkable ability to make wishes come true. Every time Benny hopped on his fluffy tail, closed his eyes, and made a wish, something magical happened.",
      autochange:true,
      images:[
        {
          img:bunny,
          txt:"Benny"
        }]
    },
    {
      content:"Now, Benny wasn't one to keep all the magic to himself. He loved to share his wishes with his friends in Willowbrook. One sunny morning, Benny gathered his pals – a chatty squirrel named Sammy, a giggly bluebird named Bella, and a shy turtle named Timmy – for a grand adventure.",
      autochange:true,
      images:[
        {
          img:squirrel,
          txt:"Sammy"
        },
        {
          img:bluebird,
          txt:"Bella"
        },
        {
          img:turtle,
          txt:"Timmy"
        }
      ]
    },
    {
      content:"Their destination was the Enchanted Meadow, a magical place where the most extraordinary flowers bloomed, and the sweetest berries grew. Benny, with a twinkle in his eye, decided that they would each make a special wish at the Wishing Well nestled in the heart of the meadow.",
      autochange:true,
      images:[
        {
          img:meadow,
        txt:"Enchanted Meadow"
        }
      ]
    },
    {
      content:"As the friends hopped along, Sammy wished for a treehouse where they could all play together. To everyone's delight, a cozy treehouse appeared among the branches, complete with a slide and a swing.",
      autochange:true,
      images:[
        {
          img:treehouse,
        txt:"Sammy's Treehouse"
        }]
    },
    {
      content:"Next, Bella wished for a rainbow that would brighten even the gloomiest days. With a whoosh of color, a magnificent rainbow stretched across the sky, bringing joy to all the creatures in Willowbrook.",
      autochange:true,
      images:[{
        img:rainbow,
        txt:"Bella's Rainbow"
      }]
    },
    {
      content:"Timmy, feeling a bit braver, wished for a garden full of delicious veggies. Suddenly, a magical garden burst into bloom, filled with carrots, lettuce, and the plumpest tomatoes.",
      autochange:true,
      images:[{
        img:garden,
      txt:"Timmy's garden"
      }]
    },
    {
      content:"As for Benny, he had a special wish too. He wished for endless laughter and smiles for everyone in Willowbrook. The air shimmered with joy, and from that day forward, the village echoed with the sounds of laughter.",
      autochange:true,
      images:[{
        img:laughter,
        txt:"Benny Laughing"
      }
      ]
    },
    {
      content:"The friends spent their days in the Enchanted Meadow, playing in the treehouse, marveling at the rainbow, and feasting on the delicious veggies. They realized that the true magic wasn't just in the wishes but in the happiness they shared.",
      autochange:true
    },
    {
      content:"And so, in the heart of Willowbrook, the little bunny Benny and his friends discovered that the most magical moments are those spent with the ones you love, surrounded by laughter, friendship, and the enchanting wonders of a world filled with wishes that come true.",
      autochange:true,
      images:[{
        img:friends,
      txt:"Friends"
    }
    ]
    },
    {
      content:"THANK YOU FOR READING!"
    }
  ]
  const [currPage,setPage]=useState(0);
  const [isLoaded,setLoaded]=useState(true);

  useEffect(()=>{
    const interval=setInterval(nextPage,15000);
    return()=>clearInterval(interval);
  })

  const nextPage=(pagenum)=>{
    setLoaded(false);
    if(pages[currPage].autochange && currPage<pages.length-1)
    setPage(pagenum?pagenum:currPage+1);
    const timoutid=setTimeout(()=>{
      setLoaded(true);
    },1000);
    return()=>clearTimeout(timoutid);
  }
  
  
  if(isLoaded)
  return (
    <div className="App">
      <div className="StoryBox">
        <StoryPage page={pages[currPage]}/>
      </div>
       <ProgressBar total={pages.length} current={currPage + 1} />
    </div>
  );
  return(
    <div className='App'>
      <div className='LoadBox'>
        L.O.A.D.I.N.G
      </div>
    </div>
    )
}

export default App;
