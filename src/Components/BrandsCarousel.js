import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './BrandsCarousel.css';  
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';
import img4 from '../assets/img/img4.png';
import img5 from '../assets/img/img5.png';

export class BrandsCarousel extends Component {
        render()  
        {      
           const settings={
            items:5, 
            loop :true,
            autoplay:true,
            autoplayHoverPause:true, 
            margin:30,
           }
           const link=()=>{
              window.open('http://stage.forathletes.com/')
           }
           
          return (  
               
      <div class='container-fluid' >  
            <div className='title'>   
            <h1>BRANDS THAT WORK WITH US</h1>
             </div>      
             
        <div class='container-slider' >   
          <OwlCarousel className='owl-carosel' {...settings} >  
           
            <div className='container-a'>
               <img src={img1}  className="item-1" alt=''/>
             </div>  
            <div className='container-a'>
               <img src={img2}   className="item-2" alt=''/>
               </div>  
            
            <div className='container-a'>
               <img src={img3}  className='item-3' alt=''/>
            </div>  
            <div className='container-a'>
               <img src={img4}  className='item-4' alt='' />
            </div>  
            <div className='container-a'>
               <img src={img5} className='item-5' alt='' />
            </div> 

           
         
        </OwlCarousel>  

      </div >  
         <div className='button'>
            <button className='buttonstyle'onClick={link}>Join the Team</button>
         </div>
      </div>
      
      
          )  
        }  
      }  
        
  
export default BrandsCarousel;