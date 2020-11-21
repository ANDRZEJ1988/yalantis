import React from 'react';

export const Header = (props) => {
const {title}=props;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

