import React,{useState} from 'react'
import Arrow from '../img/svg/pseudo.svg'

export default function Filter() {

  const [butn, setButn] = useState('dropdown');
  const [butnCost, setButnCost] = useState('dropdown');
  const [butnArend, setButnArend] = useState('dropdown');
  const [arrow1, setArrow1] = useState('arrow');
  const [arrow2, setArrow2] = useState('arrow');
  const [arrow3, setArrow3] = useState('arrow');

  const toggleButn = () => {
   setButn( (butn === 'dropdown') ? 'dropdown dropdown--active' : 'dropdown'); 
   if(butnCost === 'dropdown dropdown--active'){
    setButnCost('dropdown')
   }
   if(butnArend === 'dropdown dropdown--active'){
    setButnArend('dropdown')
   }

   setArrow1( (arrow1 === 'arrow') ? 'arrow active' : 'arrow'); 
   if(arrow2 === 'arrow active'){
    setArrow2('arrow')
   }
   if(arrow3 === 'arrow active'){
    setArrow3('arrow')
   }
  }
  const toggleButnCost = () => {
    setButnCost( (butnCost === 'dropdown') ? 'dropdown dropdown--active' : 'dropdown'); 
    if(butn === 'dropdown dropdown--active'){
      setButn('dropdown')
     }
     if(butnArend === 'dropdown dropdown--active'){
      setButnArend('dropdown')
     }

     setArrow2( (arrow2 === 'arrow') ? 'arrow active' : 'arrow'); 
     if(arrow1 === 'arrow active'){
      setArrow1('arrow')
     }
     if(arrow3 === 'arrow active'){
      setArrow3('arrow')
     } 
   }
   const toggleButnArend = () => {
    setButnArend( (butnArend === 'dropdown') ? 'dropdown dropdown--active' : 'dropdown'); 
    if(butnCost === 'dropdown dropdown--active'){
      setButnCost('dropdown')
     }
     if(butn === 'dropdown dropdown--active'){
      setButn('dropdown')
     }

     setArrow3( (arrow3 === 'arrow') ? 'arrow active' : 'arrow'); 
     if(arrow1 === 'arrow active'){
      setArrow1('arrow')
     }
     if(arrow2 === 'arrow active'){
      setArrow2('arrow')
     }  
   }

  return (
    <ul className="menu list-reset">
              <li className="menu__item">
                <button className="menu__btn" style={{borderTopLeftRadius: '8px'}} onClick={toggleButn}>Вместимость человек <img src={Arrow} className={arrow1} alt="Логотип реакции" /></button>
                <div className={butn}>
                  <div className="list__item">
                    
                    <div className="list__input flex">
                    <span>До</span>
                    <input type="text" />
                    <span>ч</span>
                    </div>
                    
                  </div>
                </div>
              </li>
              <li className="menu__item">
                <button className="menu__btn" style={{width:'155px'}} onClick={toggleButnCost}>Границы стоимости <img src={Arrow} className={arrow2} alt="Логотип реакции" /></button>
                <div className={butnCost}>
                  <div className="list__item">
                    
                    <div className="list__input flex">
                      
                    <input type="text" style={{width:'60px'}} placeholder='от'/>
                    <span>Р</span>
                    <input type="text" style={{width:'60px'}} placeholder='до'/>
                    <span>Р</span>
                    </div>
                    
                  </div>
                </div>
              </li>
              <li className="menu__item">
                <button className="menu__btn" style={{width:'155px',borderTopRightRadius: '8px'}} onClick={toggleButnArend}>Срок аренды <img src={Arrow} className={arrow3} alt="Логотип реакции" /></button>
                <div className={butnArend}>
                  <div className="list__item">
                    
                    <div className="list__input flex" style={{justifyContent: 'center',width:'135px'}}>
                      
                    <input type="text" />
                    <span>Ч</span>
                    </div>
                    
                  </div>
                </div>
              </li>
            </ul>
  )
}
