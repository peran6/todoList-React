import React, { } from "react";

const EditForm = ({ editState ,setEditState,  editText, setEditText }) => { 
    //Handler close pupup
    const closeHandler = () => { 
        setEditState(!editState);       
    };
    //Handler input text
    const inputTextHandler = (e) => {
        setEditText(e.target.value);
      };

    return (
        <div className="modal">
            <input value={editText} onChange={inputTextHandler} type="text"  className="edit-input"/>
            <button onClick={closeHandler} className="save-btn">SAVE</button>
        </div>
    ); 
}
export default EditForm;