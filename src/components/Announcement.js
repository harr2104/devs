import React, { useState } from 'react';
import './ann.css'; 

const Announcement = () => {
    const [selectedCard, setSelectedCard] = useState('c1');

    const handleCardChange = (event) => {
        setSelectedCard(event.target.id);
    };

    return (
        <div className="wrapper">
            <div className="container">
                <input
                    type="radio"
                    name="slide"
                    id="c1"
                    checked={selectedCard === 'c1'}
                    onChange={handleCardChange}
                />
                <label htmlFor="c1" className="card">
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>P2P x DEVDAYS</h4>
                            <a href=""> the challenge now!</a>
                        </div>
                    </div>
                </label>

                <input
                    type="radio"
                    name="slide"
                    id="c2"
                    checked={selectedCard === 'c2'}
                    onChange={handleCardChange}
                />
                <label htmlFor="c2" className="card">
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>Peer-To-Peer</h4>
                            <a href=""  >Join Now!</a>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Announcement;