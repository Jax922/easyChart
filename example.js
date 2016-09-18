import React from 'react';
import ReactDom from 'react-dom';
import Line from './src/example/line';

console.log(Line);

ReactDom.render(<Line />, document.getElementById('chart'));
