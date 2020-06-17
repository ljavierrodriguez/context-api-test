import React from 'react';

const CardFooter = props => {
    return (
        <div className={"card-footer" + (props.class ? props.class : "" )}>
            {props.children}
        </div>
    )
}

export default CardFooter;