/**
 * Created by metrokobe on 16/9/10.
 */
function getRefId(chartType){
    let nowTimestampLast4Num = Date.now().toString().substr(-4);
    return `${chartType}_${nowTimestampLast4Num}_${chartType}`;
}

export default getRefId;
