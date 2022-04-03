import React from 'react';
import i18next from 'i18next';
import '../styles/Test.css';
function Test() {
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div id="Container">
          <button onClick={()=>handleClick('en')} id="but" >
            English
          </button>
          <button onClick={()=>handleClick('hi')} id="but">
            Hindi
          </button> 
          <label for="English"></label>
      
    </div>
  );
}

export default Test;
