import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const anotherElment = (
    <a href="https://google.com" target="_blank">Visit Google</a>
);

const anotherUser = "Sunayan Das";

const reactElement = React.createElement(
    "a",
    {
        href: "https://google.com",
        target: "_blank"
    },
    "Click me to visit google",
    anotherUser
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
    
);