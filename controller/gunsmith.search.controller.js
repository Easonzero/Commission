/**
 * Created by eason on 17-4-3.
 */

function initData($scope,CalService){
    let index = $scope.months.indexOf($scope.currentMonth);
    $scope.locks = CalService.getLocksNum($scope.clientName,index);
    $scope.stocks = CalService.getStocksNum($scope.clientName,index);
    $scope.barries = CalService.getBarriesNum($scope.clientName,index);
    $scope.totalSales = CalService.getTotalSales($scope.clientName,index);
    $scope.commission = CalService.getCommission($scope.clientName,index);

    $scope.chartData = [
        ['locks',$scope.locks],
        ['stocks',$scope.stocks],
        ['barries',$scope.barries]
    ];
}

module.exports = function($scope,CalService){
    $scope.currentMonth = 'Jan';
    $scope.clientName = 'easonzero';
    $scope.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    initData($scope,CalService);

    $scope.selected = function(){
        initData($scope,CalService);

        return $scope.currentMonth;
    };

    $scope.search = function(){
        initData($scope,CalService);
    };
};