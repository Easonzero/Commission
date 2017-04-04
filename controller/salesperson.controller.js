/**
 * Created by eason on 17-4-3.
 */
module.exports = function($scope,$mdToast,CalService){
    $scope.currentMonth = 'Jan';
    $scope.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    $scope.report = '00,00,00';

    $scope.submit = function(){
        if($scope.report=='-1'){
            $mdToast.show(
                $mdToast.simple()
                    .textContent(`Finish a ${$scope.currentMonth} report!`)
                    .position('right start')
                    .hideDelay(500)
            );
            CalService.finish($scope.currentMonth);
            return;
        }

        let data = $scope.report.split(',');
        data[0] = Number(data[0]);
        data[1] = Number(data[1]);
        data[2] = Number(data[2]);
        if(data.length!=3||isNaN(data[0])||isNaN(data[1])||isNaN(data[2]))
            $mdToast.show(
                $mdToast.simple()
                    .textContent('The format of the report is incorrect！')
                    .position('right start')
                    .hideDelay(500)
            );

        if(!CalService.addReport(data))
            $mdToast.show(
                $mdToast.simple()
                    .textContent('locks up to 70/stocks up to 80/barries up to 90 per month!')
                    .position('right start')
                    .hideDelay(500)
            );
        else{
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Success!')
                    .position('right start')
                    .hideDelay(500)
            );
            $scope.report = '00,00,00';
        }
    };
};