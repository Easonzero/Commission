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
        test.addReport('easonzero',[3,7,9]).should.eql(true);
    });

    it('记录添加4', function() {
        test.addReport('easonzero',[0,0,0]).should.eql(true);
    });

    it('记录添加5', function() {
        test.addReport('easonzero',[0,0,100]).should.eql(false);
    });

    it('记录提交1', function() {
        test.addReport('easonzero',[3,20,10]);
        test.addReport('easonzero',[3,20,10]);
        test.addReport('easonzero',[3,20,10]);
        test.addReport('easonzero',[3,20,10]);
        test.addReport('easonzero',[3,20,10]);
        test.finish('easonzero',0);
        test.getLocksNum('easonzero',0).should.eql(12);
        test.getStocksNum('easonzero',0).should.eql(67);
        test.getBarriesNum('easonzero',0).should.eql(39);
    });

    it('记录提交2', function() {
        test.addReport('test',[30,70,90]);
        test.finish('test',1);
        test.getLocksNum('test',1).should.eql(30);
        test.getStocksNum('test',1).should.eql(70);
        test.getBarriesNum('test',1).should.eql(90);
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

    it('记录计算4', function() {
        test.addReport('easonzero',[0,0,0]);
        test.finish('easonzero',0);
        test.getTotalSales('easonzero',0).should.eql(0);
        test.getCommission('easonzero',0).should.eql(0);
    });

    it('记录计算5', function() {
        test.addReport('easonzero',[10,9,10]);
        test.finish('easonzero',0);
        test.getTotalSales('easonzero',0).should.eql(970);
        test.getCommission('easonzero',0).should.eql(97);
    });

    it('记录计算6', function() {
        test.addReport('easonzero',[40,0,0]);
        test.finish('easonzero',0);
        test.getTotalSales('easonzero',0).should.eql(1800);
        test.getCommission('easonzero',0).should.eql(220);
    });
});