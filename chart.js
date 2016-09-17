import Chart from './src/charts/Chart';
import React from 'react';
import ReactDom from 'react-dom';
import options from './src/mockup/options';


ReactDom.render(<Chart options={options} theme="macarons"/>, document.getElementById('chart'));