import './App.css';
import * as React from 'react';
import {useTelegram} from "./hooks/useTelegram";

function App() {
    const {onToggleButton} = useTelegram();


    return (
        <div className="App">
          <button onClick={onToggleButton}>Открыть</button>
        </div>
    );
}

export default App;
