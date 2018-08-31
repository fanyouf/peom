

const dataList = [
    {title:"登鹳雀楼",author:"唐代：王之涣",content:"白日依山尽，黄河入海流。欲穷千里目，更上一层楼。"},
    {title:"江雪",author:"唐代：柳宗元",content:"千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。"},
    {title:"春晓",author:"唐代：孟浩然",content:"春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。"},
    {title:"八阵图",author:"唐代：杜甫",content:"功盖三分国，名成八阵图。江流石不转，遗恨失吞吴。"},
    {title:"终南望余雪",author:"唐代：祖咏",content:"终南阴岭秀，积雪浮云端。林表明霁色，城中增暮寒。"}]
    
function getPeom(){
    // return fetch('');
    return new Promise((resolve,reject)=>{
        resolve(dataList)
    })
}
export {getPeom}