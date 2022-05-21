import './App.css';
import { useState } from 'react';
import backArrow from './img/back-arrow.png';
import Switch from './img/switch.png';
import plus from './img/plus.png';
import minus from './img/minus.png';


function App() {

  const stations=[{name:'Putin FM', range:'66,6', img:'https://ps.w.org/meks-audio-player/assets/icon-256x256.png?rev=2149542'},
  {name:'Dribbble FM', range:'101,2', img:'https://www.apkmirror.com/wp-content/uploads/2017/08/598572ffc23e0-384x384.png'},
  {name:'Doge FM', range:'99,4', img:'https://i.pinimg.com/736x/b2/6b/81/b26b811ba5627399b826651d4a2c112a.jpg'},
  {name:'Ballads FM', range:'87,1', img:'https://i.pinimg.com/736x/58/cc/69/58cc690846df170692012a2cee237b6f.jpg'},
  {name:'Maximum FM', range:'142,2', img:'https://i.pinimg.com/736x/35/dc/bb/35dcbb5472529721afce2e5e1b2a24dd.jpg'}
  ];
  
  const [show, setShow]=useState();              
  const [showImg, setShowImg]=useState();              
  const clicked =(data) =>{
    alert(`${data} Click`);
  }
  const showDetails =(name,img) =>{
    setShow(name);
    setShowImg(img);
  }
  return (
    <div className="App">
      
      <div className='widget-container'>
        <div className='widget-header'>
          <img onClick={()=>clicked('Back Arrow')} src={backArrow} alt="" />
          <h2 className='text-color'>STATIONS</h2>
          <img onClick={()=>clicked('Switch')} src={Switch} alt="" />
        </div>
        <div className='widget-body'>
        {show ? 
        <div className='widget-img'>
          <img onClick={()=>clicked('Minus')} src={minus} alt="" />
          <img className='img-size' src={showImg} alt="" />
          <img onClick={()=>clicked('Plus')} src={plus} alt="" />
        </div> 
        : null}
          {stations.map(station =>
          <div> 
            <div className='station' onClick={()=>showDetails(station.name,station.img)}>
              <h3>{station.name}</h3>
              <h3>{station.range}</h3>
            </div>
            <hr />
          </div>

          )}
          
        </div>
        <div className='widget-footer'>
          {show && <div className="">
            <p>CURRENTLY PLAYING</p>
            <h3>{show}</h3>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
