import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Widget from './Widget';

function activeWidget() {
  const WidgetDivs = document.querySelectorAll('.rnw-widget');

  // Inject our React App into each
  WidgetDivs.forEach(Div => {
    ReactDOM.render(
      <React.StrictMode>
        <Widget />
      </React.StrictMode>,
      Div
    );
  });
}

window['activeWidget'] = activeWidget;