import React, {useState, useEffect} from 'react';

const InputField: React.FC<{onChange?: React.ChangeEvent<HTMLElement>}> = ({onChange}, function f() ) => {
    return (
        <input type="text" className="border" onChange={onChange}/>
    );
};

export default InputField;