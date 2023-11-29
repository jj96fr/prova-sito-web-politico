import React, { useState, useEffect } from 'react'; // Aggiungi useState e useEffect qui
import Header from './components/Header/Header'; 
import ChiSono from './components/ChiSono/ChiSono';
import IlMioProgramma from './components/IlMioProgramma/IlMioProgramma';
import Iniziative from './Iniziative/iniziative';
import Notizie from './components/Notizie/Notizie';
import Contatti from './components/Contatti/Contatti';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Qui puoi simulare il caricamento o attendere il caricamento dei dati
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Ad esempio, attende 3 secondi prima di nascondere il loader
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <Header />
            <div id="chi-sono">
                <ChiSono />
            </div>
            <div id="il-mio-programma">
                <IlMioProgramma />
            </div>
            <div id="iniziative">
                <Iniziative />
            </div>
            <div id="notizie">
                <Notizie />
            </div>
            <div id="contatti">
                <Contatti />
            </div>
            <Footer />
        </div>
    );
};

export default App;

