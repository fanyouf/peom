

const dataList = [
    {title:"登鹳雀楼",author:"唐代：王之涣",content:"白日依山尽，黄河入海流。欲穷千里目，更上一层楼。"},
    {title:"江雪",author:"唐代：柳宗元",content:"千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。"},
    {title:"春晓",author:"唐代：孟浩然",content:"春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。"},
    {title:"八阵图",author:"唐代：杜甫",content:"功盖三分国，名成八阵图。江流石不转，遗恨失吞吴。"},
    {title:"终南望余雪",author:"唐代：祖咏",content:"终南阴岭秀，积雪浮云端。林表明霁色，城中增暮寒。"},
    {title:"玉阶怨",author:"李白",content:"玉阶生白露，夜久侵罗袜。却下水精帘，玲珑望秋月。"},
    {title:"估客乐",author:"李白",content:"海客乘天风，将船远行役。譬如云中鸟，一去无踪迹。"},
    {title:"玉门关",author:"",content:"明月出天山，苍茫云海间。长风几万里，吹度玉门关"}
]

function sleep(){
    let t = Date.now();
    while(Date.now() - t > 3000){
        break;
    }
}
function getPeom(){
    let url = "http://www.fanyoufu.com/getPros.php"
    return fetch(url).then(rs=>rs.json());
}
function getAuthor(){
    let url = "http://www.fanyoufu.com/getAuthor.php"
    return fetch(url).then(rs=>rs.json());
}

export {getPeom,getAuthor}