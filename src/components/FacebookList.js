import FaceBook from './FaceBook';
import { useState } from "react";
import './CountryList.css'
import CountryList from './CountryList';
import Sort from './Sort';
import Search from './Search';

function profileFiltered(profiles,word) {
  return profiles.filter(function(profile){
    if(profile.firstName.indexOf(word)>=0 ||
    profile.lastName.indexOf(word)>=0 ||
    profile.country.indexOf(word)>=0) return true
    else return false
  })
}






function FacebookList({profiles,listOfCountries}) {
    const [countryList,setCountryList] = useState(listOfCountries)
    const [fbProfiles, SetFbProfiles] = useState(profiles);
    const [btnClicked,setBtnClicked] = useState('')
    const [search,setSearch] = useState('')

    return (
    <div>
    <CountryList btnClicked={btnClicked} setBtnClicked={setBtnClicked} countryList={countryList} setCountryList={setCountryList}/>
    <Sort fbProfiles={fbProfiles} SetFbProfiles={SetFbProfiles}/>
    <Search search={search} setSearch={setSearch}/>  
      {profileFiltered(fbProfiles,search).map(function (profile, index) {
        return (
          <FaceBook
            key={index}
            image={profile.img}
            lastName={profile.lastName}
            firstName={profile.firstName}
            country={profile.country}
            type={profile.isStudent ? 'Student' : 'Teacher'}
            btnClicked={btnClicked}
            displayInfo={profile.displayInfo}
          />
          
        );
      })}
    </div>
  );
}
export default FacebookList;
