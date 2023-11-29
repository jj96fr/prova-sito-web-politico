import React from 'react';
import Header from './components/Header/Header'; 
import ChiSono from './components/ChiSono/ChiSono';
import IlMioProgramma from './components/IlMioProgramma/IlMioProgramma';
import Iniziative from './Iniziative/iniziative';
import Notizie from './components/Notizie/Notizie';
import Contatti from './components/Contatti/Contatti';
import Footer from './components/Footer/Footer';

const App = () => {
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
