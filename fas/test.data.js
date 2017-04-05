/**
 * Created by eason on 17-4-5.
 */
function gen(){
    let result = [];
    for(let i=0;i<12;i++){
        if(Math.random()>1/2) continue;
        let tmp=[];
        for(let i=0;i<30;i++){
            if(Math.random()>1/2) continue;
            tmp.push([
                parseInt(Math.random()*7),
                parseInt(Math.random()*8),
                parseInt(Math.random()*9)
            ])
        }
        result.push(tmp);
    }
    return result;
}

module.exports = {
    easonzero:gen(),
    张三:gen(),
    王五:gen(),
    赵六:gen(),
    李四:gen(),
    鬼脚七:gen(),
    黄飞鸿:gen(),
    李小龙:gen(),
    叶问:gen(),
    霍元甲:gen(),
    郭靖:gen(),
    黄蓉:gen()
};