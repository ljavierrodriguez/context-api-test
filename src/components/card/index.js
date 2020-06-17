import React from 'react';

const Card = props => {
    return (
        <div className="card mb-2" style={{ width: props.width ? props.width : "300px" }}>
            {props.children}
        </div>
    )
}

export default Card;