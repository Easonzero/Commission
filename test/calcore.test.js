require("should");
const calcore = require('../fas/cal.core');

/**
 * Created by eason on 17-4-4.
 */

let test = {testFunc:calcore};
test.testFunc();

describe('记录管理类的测试', function() {
    it('记录添加1', function() {
        test.addReport('easonzero',[90,90,90]).should.eql(false);
    });

    it('记录添加2', function() {
        test.addReport('easonzero',[0,90,70]).should.eql(false);
    });

    it('记录添加3', function() {
        test.addReport('easonzero',[30,70,90]).should.eql(true);
    });

    it('记录添加4', function() {
        test.addReport('easonzero',[0,0,0]).should.eql(true);
    });

    it('记录提交', function() {
        test.addReport('easonzero',[30,70,90]);
        test.finish('easonzero',0);
        test.getLocksNum('easonzero',0).should.eql(30);
        test.getStocksNum('easonzero',0).should.eql(70);
        test.getBarriesNum('easonzero',0).should.eql(90);
    });

    it('记录计算1', function() {
        test.addReport('easonzero',[30,70,90]);
        test.finish('easonzero',0);
        test.getTotalSales('easonzero',0).should.eql(5700);
        test.getCommission('easonzero',0).should.eql(1000);
    });

    it('记录计算2', function() {
        test.addReport('easonzero',[10,10,10]);
        test.finish('easonzero',0);
        test.getTotalSales('easonzero',0).should.eql(1000);
        test.getCommission('easonzero',0).should.eql(100);
    });

    it('记录计算3', function() {
        test.addReport('easonzero',[10,20,10]);
        test.finish('easonzero',0);
        test.getTotalSales('easonzero',0).should.eql(1300);
        test.getCommission('easonzero',0).should.eql(145);
    });
});