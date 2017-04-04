/**
 * Created by eason on 17-4-3.
 */
angular.module('calculate').service('CalService',function(){
    let queue = [];
    let cnl=0,cns=0,cnb=0;

    let history = {};

    this.addReport = function(report) {
        if(cnl+report[0]>70||cns+report[1]>80||cnb+report[2]>90) return false;
        queue.push(report);
        cnl+=report[0];cns+=report[1];cnb+=report[2];
        return true;
    };

    this.finish = function(month){
        history[month] = [];

        for(let report of queue){
            history[month].push(report);
        }

        queue.length = 0;
        cnl=0;cns=0;cnb=0;
    };

    this.getLocksNum = function(month){
        let num = 0;
        if(!history[month]) return 0;
        let reports = history[month];
        for(let report of reports){
            num+=report[0];
        }
        return num;
    };

    this.getStocksNum = function (month) {
        let num = 0;
        if(!history[month]) return 0;
        let reports = history[month];
        for(let report of reports){
            num+=report[1];
        }
        return num;
    };

    this.getBarriesNum = function (month) {
        let num = 0;
        if(!history[month]) return 0;
        let reports = history[month];
        for(let report of reports){
            num+=report[2];
        }
        return num;
    };

    this.getTotalSales = function(month){
        return 45*this.getLocksNum(month)+30*this.getStocksNum(month)+25*this.getBarriesNum(month);
    };

    this.getCommission = function(month){
        let totalSales = this.getTotalSales(month);
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
});