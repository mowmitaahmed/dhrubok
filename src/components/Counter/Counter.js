import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            <div className="d-flex flex-column">
                <h1 className="align-self-center py-4 px-5 border border-success border-5 rounded-circle">{count}</h1>
                <br />
                <button
                onClick={()=> setCount(count+1)} 
                type="button" 
                className="align-self-center btn btn-primary">Increase</button>
            </div>
        </div>
    );
};

export default Counter;