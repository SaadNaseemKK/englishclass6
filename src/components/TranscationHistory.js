import React from 'react';

export const TranscationHistroy = () => {
    return (
        <div>
            <h4>Transcation History</h4>
            <ul className="list">
                <li className="plus">
                    Project 1 Income
                    <span>$,1000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Project 1 salaries
                    <span>-$500</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    );
}
