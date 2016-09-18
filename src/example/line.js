/**
 * Created by metrokobe on 16/9/17.
 */
import React from 'react';
// import Chart from '../../build/Chart';
import Chart from 'easy-chart';
import options from '../mockup/options';
//
class Line extends React.Component {
    render(){
        return (
            <div>
                <Chart options={options} ref="shedong" theme="macarons" width="1000"/>
            </div>
        )
    }
}
export default Line;