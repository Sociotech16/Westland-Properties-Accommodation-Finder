import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ 
  ButtonText1, ButtonText2, 
  ButtonPath1, ButtonPath2,
  text1, text2, text3, text4,
  textPath1, textPath2, textPath3, textPath4,
  showText1 = true,
  showText2 = true,
  showText3 = true,
  showText4 = true,
  showButton1 = true,
  showButton2 = true
}) {
  return (
    <nav>
      <ul>
        {showText1 && (
          <li><Link to={textPath1}>{text1}</Link></li>
        )}
        {showText2 && (
          <li><Link to={textPath2}>{text2}</Link></li>
        )}
        {showText3 && (
          <li><Link to={textPath3}>{text3}</Link></li>
        )}
        {showText4 && (
          <li><Link to={textPath4}>{text4}</Link></li>
        )}
        {showButton1 && (
          <li>
            <button onClick={() => {
              localStorage.removeItem('token');
              window.location.href = ButtonPath1;
            }}>
              {ButtonText1}
            </button>
          </li>
        )}
        {showButton2 && (
          <li>
            <button onClick={() => {
              localStorage.removeItem('token');
              window.location.href = ButtonPath2;
            }}>
              {ButtonText2}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
