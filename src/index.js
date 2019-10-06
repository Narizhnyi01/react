import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let dataPost = [
    {id: 1, message: 'hello', like: '12'},
    {id: 2, message: 'how are you?', like: '17'},
    {id: 2, message: 'how are you?', like: '27'},
    {id: 2, message: 'how are 21?', like: '37'},
    {id: 2, message: 'how are you111?', like: '47'}

];
let dialogs = [
    {id: 1, name: 'Slava'},
    {id: 2, name: 'Anton'},
    {id: 3, name: 'Alona'},
    {id: 4, name: 'July'},
    {id: 5, name: 'Ruslan'}
];

let messages = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'how are you?'},
    {id: 3, message: 'fine'},
    {id: 4, message: 'yo'}

];
ReactDOM.render(<App posts={dataPost} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
