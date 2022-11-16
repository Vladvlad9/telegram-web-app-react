import './App.css';
import * as React from 'react';
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";

function App() {
    const {onToggleButton, tg} = useTelegram()

    useEffect(()=>{
        tg.ready();
    }, [])

    return (
        <div className="App">
          <button onClick={onToggleButton} type="button">toggle</button>
        </div>
    );
}

export default App;
