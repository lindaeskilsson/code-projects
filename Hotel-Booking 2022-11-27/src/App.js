import "./pages/list/list.css";
import "./components/searchItem/searchItem.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MailList from "./components/mailList/MailList";
import { getHotelinfo } from "./components/searchItem/Hoteldata"; 
import SearchItem  from "./components/searchItem/SearchItem"; 

// import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { format } from "date-fns";
// import { DateRange } from "react-date-range";


function App() {  
  
  // const location = useLocation();
  const [Query, setQuery] = useState("");
  const [result, setResult] = useState("");

  // function that search for country and location of the hotel
  function searchDestination() {
    let searchResult = [];
    
    const hoteldatas = getHotelinfo(); 

    for (let hoteldata of hoteldatas) {

      let destination = Query.toLocaleLowerCase(); 
      let location = hoteldata.location.toLocaleLowerCase();
      let country = hoteldata.destination.toLocaleLowerCase();
    

    if (location.includes(destination) || country.includes(destination)) {
      searchResult.push(hoteldata) 
    }}
    
    setResult(searchResult);
    // console.log(result);
  }
  
  // const [date, setDate] = useState(location.state.date);

  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Sök</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" onChange={(e) => setQuery(e.target.value)} />
            </div>

            <div className="lsItem">
              <label>Inchekning</label>
              {/* <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )} */}

            </div>
            <div className="lsItem">
              <label>Preferenser</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min pris <small>per natt</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max pris <small>per natt</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Vuxen</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    // placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Barn</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    // placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Rum</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    // placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={searchDestination}>Sök efter resa</button>
          </div>
          <div className="listResult">
          { result ? <SearchItem result={result}/> : <div></div> }
         </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>

  );
}

export default App;
