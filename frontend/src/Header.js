import React from 'react';

export default function Header({ children }) {
    return ( 
        <header>
            <h1> EAC Educação - {children} </h1>
        </header>
    );
}