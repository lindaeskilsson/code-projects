import {
  faShoppingBag,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Comonent for the header of the web application. 
const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  // Explain this?? 
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // function that redirect the user to the hotel list view, where the user can do a new search for an hotel
  // by using destination inpur. 
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <Link to ={`/hotels`}>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHotel} />
            <span>Hotell</span>
          </div>
          </Link>
          <div className="headerListItem">
          <FontAwesomeIcon icon={faShoppingBag} />
            <span>Bokning</span>
          </div>
        </div>
   </div>
   </div>
  );
};

export default Header;
