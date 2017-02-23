import React, {Component} from 'react';
import './App.css';

import {Header} from "./components/Header";
import {MileageForm} from "./components/MileageForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <MileageForm/>
            </div>
        );
    }
}

export default App;
