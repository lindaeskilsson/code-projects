import "./footer.css";

// A footer-component that includes two lists of exampels of links that could be included to at website like this. 

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Boka transfer</li>
          <li className="fListItem">Hitta flygplats</li>
          <li className="fListItem">Restaurangerr </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Kundtjänst</li>
          <li className="fListItem">Karriär på Nottum</li>
          <li className="fListItem">Hållbarhet</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Nottum Hotels.</div>
    </div>
  );
};

export default Footer;
