import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//componentes
import inicio from '../pages/inicio';
import Dasboard from '../pages/dasboard';

function App() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={inicio} />
                <Route path="/Dasboard" exact component={Dasboard}  />
            </div>
        </Router>

    );
}

export default App;