import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Widget from './src/Widget';

const popupRoot = document.getElementById("popup-root");

ReactDOM.render(
    <React.Fragment>
      <Widget />
    </React.Fragment>,
    popupRoot
);