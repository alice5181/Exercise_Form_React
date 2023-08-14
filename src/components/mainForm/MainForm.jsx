import React, { useState } from 'react';
import Card from '../card/Card';
import './MainForm.css';

const MainForm = () => {
    const [user, setUser] = useState({
        bookName: '',
        authorName: '',
        personName: '',
    });

    const [showCard, setShowCard] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validations
        if (user.bookName.trim().length < 3 || /^\s+/.test(user.bookName)) {
            setErrorMessage('Please check the book name is correct');
            setShowCard(false);
            return;
        }
        

        if (user.authorName.length < 6) {
            setErrorMessage('Please check the author full name is correct');
            setShowCard(false);
            return;
        }

        if (user.personName.length < 6) {
            setErrorMessage('Please check the person full name is correct');
            setShowCard(false);
            return;
        }

        // Validations ok
        setShowCard(true);
        setErrorMessage('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="main-form">
                <label>Name of your favorite book: </label>
                <input
                    type="text"
                    name="bookName"
                    value={user.bookName}
                    onChange={handleChange}
                />

                <label>Author's full name: </label>
                <input
                    type="text"
                    name="authorName"
                    value={user.authorName}
                    onChange={handleChange}
                />

                <label>Your full name: </label>
                <input
                    type="text"
                    name="personName"
                    value={user.personName}
                    onChange={handleChange}
                />

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button>Send the request</button>
            </form>
            {showCard && <Card user={user} />}
        </div>
    );
}

export default MainForm;

