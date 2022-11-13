function Sort({ fbProfiles, SetFbProfiles }) {
  function sortByName() {
    console.log(fbProfiles);

    SetFbProfiles(
        [...fbProfiles].sort(function (a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        } else if (a.firstName > b.firstName) {
          return 1;
        } else return 0;
      })
    );
  }
  function sortByCountry() {
    console.log(fbProfiles);
    SetFbProfiles(
        [...fbProfiles].sort(function (a, b) {
        if (a.country < b.country) {
          return -1;
        } else if (a.country > b.country) {
          return 1;
        } else return 0;
      })
    );
  }



  

  return (
    <div>
      Sort by:
      <button onClick={sortByName}>Name</button>
      <button onClick={sortByCountry}>Country</button>


    </div>
  );
}

export default Sort;