import React from 'react';
import Header from './Header'; 
const App = () => {
    return (
        <div>
            <Header />
            <main style={{ margin: '20px' }}>
                {/* Qui puoi inserire il contenuto principale della tua app */}
                <h1>Benvenuto nella nostra App!</h1>
                {/* Altri componenti e contenuti vanno qui */}
            </main>
        </div>
    );
};

export default App;
