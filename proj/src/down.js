import React, { useContext } from 'react';
import { Context } from './context';
import { useNavigate } from 'react-router-dom';

function Down() {
    const { items, setItems } = useContext(Context);
    const navigate = useNavigate();

    const clickHandler = () => {
        setItems((prevcount) => prevcount - 1);
    };

    const goBack = () => {
        navigate('/');
    }

    return (
        <div>
            <button onClick={clickHandler}>{items}</button>
            <br></br>
            <button onClick={goBack}>Back</button>
        </div>
    );

}
export default Down;