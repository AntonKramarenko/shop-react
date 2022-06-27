import './Header.scss'
import { NavLink } from "react-router-dom";
import Logo from '../../assets/img/header_logo.png'
import SelectCurrency from '../selectCurrency/SelectCurrency';
import Basket from '../basket/basketBox/BasketBox';
import useLocalStorage from '../../hooks/useLocalStorage';
import { BackgroundPlace } from '../BackgroundPlace/BackgroundPlace';


interface HeaderProps{
  category: any
}

export  const Header:React.FC<HeaderProps> =(props) =>  {

  

  return (
       <div className="navbar">
         <div className="container">
          <div className="navbar__categories">     
          {props.category.map((item: any) => {
            return (
              <NavLink  
              to={`/${item.name}`} 
              key={item.name}
              >
                {item.name}
              </NavLink>  
             )})}   
        </div>
        <div className="navbar__logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar__actions">
          <SelectCurrency/>
          <Basket />
        </div>
      </div>
    </div>
  )
}
