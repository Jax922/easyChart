/**
 * Created by metrokobe on 16/9/14.
 */
import  Echart from 'echarts';
import  React from 'react';
import {findDOMNode} from 'react-dom';
import getRefId  from './getRefId';
import Themes from '../themes/themes';


class Chart extends React.Component{
    constructor(props){
        super(props);
        this.chartDomRefId = getRefId('LINE');
        this.echartInstance = null;
    }
    static defaultProps = {
        options: {},
        loading: false,
        style: {
            width: 600,
            height: 400
        }
    }
    static propTypes = {
        options: React.PropTypes.object.isRequired,
        theme: React.PropTypes.oneOf(['macarons', 'shine', 'roma'])
    }
    drawChart(){
        this.props.loading && this.getChartInstance().showLoading();
        this.echartInstance.setOption(this.props.options);
        this.props.loading && this.echartInstance.hideLoading();
    }
    initChart(elem){
        if(this.props.theme){
            return Echart.init(elem, this.props.theme);
        }else{
            return Echart.init(elem);
        }

    }
    getChartInstance(){
        if(this.echartInstance){
            return this.echartInstance;
        }
        const instance = Echart.getInstanceByDom(this.refs[this.chartDomRefId]) || this.initChart(this.refs[this.chartDomRefId])
        this.echartInstance = instance;
        return instance;
    }
    componentDidMount(){
        // 设置theme
        const theme = this.props.theme;
        if(theme){
            Echart.registerTheme(theme, Themes[theme]);
        }
        const chartDom = findDOMNode(this.refs[this.chartDomRefId]);
        if(!this.echartInstance){
            this.echartInstance = this.initChart(chartDom);
        }

        // 渲染图表
        this.drawChart();
    }
    componentWillUnmount(){
        this.echartInstance && this.echartInstance.dispose();
    }
    render(){
        const  { style, width, height }= this.props;
        width && width > 0 && (style['width'] = width);
        height && height > 0 && (style['height'] = width);
        return (
            <div ref={this.chartDomRefId} style={style}></div>
        )

    }
}

export default Chart;