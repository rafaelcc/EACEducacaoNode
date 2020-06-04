import React from 'react';

import Header from '../Header';

import './styles.css';

export default function Home () {
    return (
        <div>
          <Header> </Header>
          <div className="home-container">
            <section className="class form">
                <iframe className="video form" 
                width={640} 
                height={360} 
                frameborder={0}
                src="https://www.powtoon.com/embed/cKbDFE2p4Pi/"/>
            </section>
          </div>
        </div>
    )
}