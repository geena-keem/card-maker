import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'geena1',
            company: 'geena',
            theme: 'dark',
            title: 'front',
            email: 'geena@gmail.com',
            message: 'go for it',
            fileName: 'geena',
            fileURL: null,
        },
        {
            id: '2',
            name: 'geena2',
            company: 'geena',
            theme: 'light',
            title: 'front',
            email: 'geena@gmail.com',
            message: 'go for it',
            fileName: 'geena',
            fileURL: 'geena.png',
        },
        {
            id: '3',
            name: 'geena3',
            company: 'geena',
            theme: 'colorful',
            title: 'front',
            email: 'geena@gmail.com',
            message: 'go for it',
            fileName: 'geena',
            fileURL: null,
        },
    ]);

    const history = useHistory();

    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
            if (!user) {
                history.push('/');
            }
        });
    }, []);

    const addCard = (card) => {
        const updated = [...cards, card];
        setCards(updated);
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;
