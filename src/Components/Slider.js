import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './slider.css';

export default function Slider() {
  return (
<div className='container'>
   <div className='slide'>
      <Carousel fade>
        <Carousel.Item>
           <img
            src="https://media.gettyimages.com/photos/monica-puig-of-peru-plays-a-backhand-during-her-ladies-singles-third-picture-id1153049572?k=20&m=1153049572&s=612x612&w=0&h=UP-MVDvH7FE4IRHGDLEaKegxQZBcXNa1SgGy6-GdQAk="
            alt="Monica Puig"
          />
         <Carousel.Caption>
           <h2>Monica Puig</h2> 
           <p>WTA professional Tennis player</p>
           <p>2016 Rio olympics Gold medalist</p>
         </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
          <img
            src= "https://media.gettyimages.com/photos/michael-jordan-forward-for-the-chicago-bulls-holding-a-basketball-in-picture-id515428128?k=20&m=515428128&s=612x612&w=0&h=Hm4UbfUHwsmW8j0naq0rECeVe30FCWbbJre4LuEvLk8="
            alt= "Michael Jordan"
          />
          <Carousel.Caption>
            <h2>Michael Jordan</h2> 
            <p>WTA professional Tennis player</p>
            <p>2016 Rio olympics Gold medalist</p>
         </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src= "https://media.gettyimages.com/photos/tiger-woods-of-the-united-states-plays-a-shot-on-the-first-hole-the-picture-id1142622727?k=20&m=1142622727&s=612x612&w=0&h=I7FybJUvxftDNqB_03p1Ws-L6fxurifTfuym8g46Fy4="
          alt="Tiger woods"
      />
     <Carousel.Caption>
       <h2>Tiger woods</h2> 
       <p>WTA professional Tennis player</p>
       <p>2016 Rio olympics Gold medalist</p>
      </Carousel.Caption>
    </Carousel.Item>
   </Carousel>
   </div>
  <div className='disc'>
     <div className='logo'>
          <h2>ATHLEATS MAKE THE <br></br>WORLD GO AROUND</h2>
          <img src="http://stage.forathletes.com/media/wysiwyg/running.png" />
        </div>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in 
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
         deserunt mollit anim id est laborum.
         </p>
         <div className='buttons'>
            <button type='button'>Learn More</button>
         </div>
    </div>
</div>
);
}