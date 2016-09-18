# easyChart
echart in react,让图表更简单。so easy!

#  介 绍
 在公共组件进行的过程中,图表组件并没有!!!想想上次被后端吐槽图表形式单调,于是还是选择了echart加入react的组件库。
 现在还是把图表独立出来,这样以后可以很方便图表的扩展。为了不增加学习的成本,所有的图表配置就是echart官方的说明[echart配置文档](http://echarts.baidu.com/option.html#title)。
 之前有考虑自己抽出一部分配置来,写到一半发现,其实这样等于增加学习成本,而且配置泛滥,并不好。而且一旦某一天echart升级,可能整个配置都得改变,这样也不利于升级。
 当然这里面还是可以抽出来一部分,同时保持提供和echart一样的配置。业务又来了,先就这样!等可以休息了,再重新写一次。
 
#  安 装
通过npm安装到项目中。
```bash
 npm/cnpm i easy-chart --save
```

#  栗 子

引入easy-chart:
```js
 var Chart = require('easy-chart')
 import Chart from 'easy-chart'
```

要画一个图表很简单,如下:options是echarts配置文档,可以参考之;theme是主题提供额外的3种主题,如果用eachrts默认的不用传theme;width是图表的宽度。具体的参数说明请看下面。
```html
 <Chart options={options} theme="macarons" width="1000"/>
```


#  配置说明
*  options(必须传递): 这个画图表的核心,具体需要参考echarts的options文档。
*  theme(可选传递): 图表的主题,提供额外的3种,'macarons', 'roma', 'shine'。具体的参考echarts官方的。
*  width(可选传递): 图表的宽度默认是600.
*  height(可选传递): 图表的高度默认是400.

 
 
 