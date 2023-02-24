import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import styles from './styles.scss';
import Main from "./pages/Main/Main";
import Characters from "./pages/Characters/Characters";
import Character from "./pages/Character/Character";
import Episodes from "./pages/Episodes/Episodes";
import SlideRoutes from 'react-slide-routes';

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <SlideRoutes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                    <Route path="/episodes" element={<Episodes/>}/>
                    <Route path="/character/:id" element={<Character/>}/>
                </SlideRoutes>

            </div>
        </BrowserRouter>
    )
}

export default App;