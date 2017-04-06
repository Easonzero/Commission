let test = require('./test.data');
/**
 * Created by eason on 17-4-4.
 */

function calcore(){
    let queue = {},history = test;

    this.addReport = function(clientName,report) {
        if(!queue[clientName]) queue[clientName] = {q:[],cnl:0,cns:0,cnb:0};
        if(queue[clientName].cnl+report[0]>70||
            queue[clientName].cns+report[1]>80||
            queue[clientName].cnb+report[2]>90) return false;
        queue[clientName].q.push(report);
        queue[clientName].cnl+=report[0];
        queue[clientName].cns+=report[1];
        queue[clientName].cnb+=report[2];
        return true;
    };

    this.finish = function(clientName,month){
        if(!history[clientName])
            history[clientName] = {};
        history[clientName][month] = [];
        for(let report of queue[clientName].q){
            history[clientName][month].push(report);
        }
        delete queue[clientName];
    };

    this.getLocksNum = function(clientName,month){
        let num = 0;
        if(!history[clientName]||!history[clientName][month]) return 0;
        let reports = history[clientName][month];
        for(let report of reports){
            num+=report[0];
        }
        return num;
    };

    this.getStocksNum = function (clientName,month) {
        let num = 0;
        if(!history[clientName]||!history[clientName][month]) return 0;
        let reports = history[clientName][month];
        for(let report of reports){
            num+=report[1];
        }
        return num;
    };

    this.getBarriesNum = function (clientName,month) {
        let num = 0;
        if(!history[clientName]||!history[clientName][month]) return 0;
        let reports = history[clientName][month];
        for(let report of reports){
            num+=report[2];
        }
        return num;
    };

    this.getTotalSales = function(clientName,month){
        return 45*this.getLocksNum(clientName,month)+30*this.getStocksNum(clientName,month)+25*this.getBarriesNum(clientName,month);
    };

    this.getCommission = function(clientName,month){
        let totalSales = this.getTotalSales(clientName,month);
        let commission = 0;

        if(totalSales > 1800) {
            commission += (totalSales-1800)*0.2;
            totalSales = 1800;
        }

        if(totalSales > 1000) {
            commission += (totalSales-1000)*0.15;
            totalSales = 1000;
        }

        commission += totalSales*0.1;

        return commission;
    };

    this.getAllClients = function(){
        return Object.keys(history);
    }

    this.getClientHistory = function(client){
        return history[client];
    }
}

module.exports = calcore;