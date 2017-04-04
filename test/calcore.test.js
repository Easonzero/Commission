require("should");
const calcore = require('../fas/cal.core');

/**
 * Created by eason on 17-4-4.
 */

let test = {testFunc:calcore};
test.testFunc();

describe('记录管理类的测试', function() {
    it('记录添加', function() {
        test.addReport([90,90,90]).should.eql(false);
        test.addReport([0,90,70]).should.eql(false);
        test.addReport([30,70,90]).should.eql(true);
        test.addReport([0,0,0]).should.eql(true);
    });

    it('记录提交', function() {
        test.addReport([30,70,90]);
        test.finish('Jan');
        test.getLocksNum('Jan').should.eql(30);
        test.getStocksNum('Jan').should.eql(70);
        test.getBarriesNum('Jan').should.eql(90);
    });

    it('记录计算', function() {
        test.addReport([30,70,90]);
        test.finish('Jan');
        test.getTotalSales('Jan').should.eql(5700);
        test.getCommission('Jan').should.eql(1000);
    });
});