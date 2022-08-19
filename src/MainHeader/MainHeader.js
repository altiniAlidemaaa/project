import React from 'react';
import './styles.scss';

const MainHeader = ({ name, description }) => (
    <div className="container">
        <h1 className="header__name">{name}</h1>
        <p className="header__description">{description}</p>
    </div>
);

export default MainHeader;
