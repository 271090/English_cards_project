import React from "react";
import "./Table.css";

class Table extends React.Component {
render() {
const {
english,
transcription,
russian,
tags,
isSelected,
} = this.props;

let classButtons;
if (isSelected) classButtons = "selected";
return (
<div className="table">
        <h2>{english}</h2>
        <p>
          <span></span> {transcription}
        </p>
        <p>
          <span></span> {russian}
        </p>
        <p>
          <span></span> {tags}
        </p>
        <div className={`table_buttons ${classButtons}`}>
          
  
  { isSelected && <div className="table_buttons"><button className="tableSaveButton" >Save</button> <button className="tableEditButton">Edit</button> <button className="tableDeliteButton">Delite</button></div>}
          { !isSelected && <div className="table_buttons"><button className="tableEditButton">Edit</button><button className="tableDeliteButton" >Delite</button></div>}
        </div>
      </div>
);
}
}

export default Table;