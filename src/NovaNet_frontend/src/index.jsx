import * as React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { Navbar } from "./Navbar";
import { BrowserRouter } from 'react-router-dom'
import { NovaNet_backend } from "../../declarations/NovaNet_backend";
import Provider from '@funded-labs/plug-inpage-provider';
import { plug } from "./plug"

const MyHello = () => {
  // const [name, setName] = React.useState('');
  // const [message, setMessage] = React.useState('');

  // async function doGreet() {
  //   const greeting = await NovaNet_backend.greet(name);
  //   setMessage(greeting);
  // }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

render(<MyHello />, document.getElementById("app"));