import React, {useState, useEffect} from 'react';

/*  react.fc identifies this as an "onClick" function component 
*   but where the ? makes onClick an optional param
*   React.MouseEvent... is an identifier for "onClick"
*   ({onClick}) says "when onClick happens, execute the code inside the function"
*/
const SubmitButton: React.FC<{handleSubmit?: React.MouseEventHandler<HTMLElement>}> = ({handleSubmit}) => {
    return (
        <button type="submit" onClick={handleSubmit} className="border">SUBMIT</button>
    );
};

export default SubmitButton;