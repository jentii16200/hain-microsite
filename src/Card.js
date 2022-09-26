import React, { useEffect } from 'react';

export const Card = ({ name }) => {
    useEffect(()=>{
        console.log('DIViIIIIII');
    }, []);
    return(
        <div>
            I'm a {name} Card
        </div>
    );
};