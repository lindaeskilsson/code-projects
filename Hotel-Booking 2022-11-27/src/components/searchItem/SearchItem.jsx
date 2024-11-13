import "./searchItem.css";

function searchItem(props){
   {  
      let result = props.result;

      return ( 
    <div>
    {result.map(x => {
      return (
    <div className="searchItem">
       <img className="siImg" src={x.image}/> 
       
      <div className="siDesc">
        <h1 className="siTitle">{x.hotelname}</h1>
        <span className="siDistance">{x.seadistance}</span>
        <span className="siTaxiOp">{x.hoteltransfer}</span>
        <span className="siSubtitle">{x.shortdesc}</span>
        <span className="siDesc">{x.talldesc}</span>
        <span className="siFeatures">{x.features}</span>
        <span className="siFacilities">{x.facilities}</span>
        <span className="siPaymethod">{x.payment}</span>
        <span className="siCancelOpSubtitle">{x.restaurant}</span>
      </div>

      <div className="siDetails">
        <div className="siRating">
          <span>{x.recomends}</span>
          <button>{x.review}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{x.price}</span>
          <span className="siTaxOp">Ink. Moms</span>
          <div>
            <span className="rd-btn">
            <input type="radio" value="transfer" name="transfer" />Lägg till transfer
          </span>
          </div>
          <button className="siCheckButton">Boka nu</button>
        </div>
      </div>
    </div>
      )
    })}
    </div>
  );
}; 
}

export default searchItem;
