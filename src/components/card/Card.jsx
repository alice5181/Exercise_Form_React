import React from 'react';
import './Card.css';

const Card = ({ user }) => {
    return (
        <div className="card">
            <h2>Requested aproval information for:</h2>
            <p>Book Name: {user.bookName} </p>
            <p>Author Name: {user.authorName}</p>
            <p>Person Name: {user.personName}</p>
        </div>
    );
}

export default Card;