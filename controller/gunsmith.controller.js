/**
 * Created by eason on 17-4-3.
 */
module.exports = function($scope,CalService){
    $scope.currentMonth = 'Jan';
    $scope.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    $scope.locks = CalService.getLocksNum($scope.currentMonth);
    $scope.stocks = CalService.getStocksNum($scope.currentMonth);
    $scope.barries = CalService.getBarriesNum($scope.currentMonth);
    $scope.totalSales = CalService.getTotalSales($scope.currentMonth);
    $scope.commission = CalService.getCommission($scope.currentMonth);

    $scope.chartData = [
        ['locks',$scope.locks],
        ['stocks',$scope.stocks],
        ['barries',$scope.barries]
    ];

    $scope.selected = function(){
        $scope.locks = CalService.getLocksNum($scope.currentMonth);
        $scope.stocks = CalService.getStocksNum($scope.currentMonth);
        $scope.barries = CalService.getBarriesNum($scope.currentMonth);
        $scope.totalSales = CalService.getTotalSales($scope.currentMonth);
        $scope.commission = CalService.getCommission($scope.currentMonth);

        $scope.chartData = [
            ['locks',$scope.locks],
            ['stocks',$scope.stocks],
            ['barries',$scope.barries]
        ];

        return $scope.currentMonth;
    }
};