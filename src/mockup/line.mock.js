/**
 * Created by metrokobe on 16/9/11.
 */
import Mock from 'mockjs';
const Random = Mock.Random;


const data = Mock.mock({
    'array|15-30':[{
            name: '@date("yyyy-MM-dd")',
            date: '@date("yyyy-MM-dd")',
            value: '@integer(0, 1000)'
    }]
})

console.log(data);

export default data.array;