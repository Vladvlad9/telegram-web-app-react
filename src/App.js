import './App.css';
import * as React from 'react';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";

function App() {
    const {onToggleButton} = useTelegram();


    return (
        <div className="App">
            <Header/>
          <button onClick={onToggleButton}>Открыть</button>
        </div>
    );
}

export default App;
