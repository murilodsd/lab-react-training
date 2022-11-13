// import { useState } from "react";
import './CountryList.css'



function CountryList({countryList,setCountryList,setBtnClicked}) {




  function changeBtnColor(e) {
    setCountryList(countryList.map(function(country,index){
        if (country.name == e.target.innerText) {
            if (country.bgColor == 'white') {
                country.bgColor = 'blue'
            } else {country.bgColor = 'white'
        }}
        return country;
    }


    ))
    setBtnClicked(e.target.innerText)
    // e.target.style.backgroundColor = 'blue'
  }

  return (
    <div>
      <button>All</button>
      {countryList.map(function (country, index) {
        return (<button className={country.bgColor} onClick={changeBtnColor}>{country.name}</button>)
      })}
    </div>
  );
}

export default CountryList;
