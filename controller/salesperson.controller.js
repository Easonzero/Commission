/**
 * Created by eason on 17-4-3.
 */
function errprint($mdToast,msg){
    $mdToast.show(
        $mdToast.simple()
            .textContent(msg)
            .position('right start')
            .hideDelay(500)
    );
}

module.exports = function($scope,$mdToast,CalService){
    $scope.currentMonth = 'Jan';
    $scope.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    $scope.report = '00,00,00';

    $scope.submit = function(){
        if($scope.report=='-1'){
            errprint($mdToast,`Finish a ${$scope.currentMonth} report!`);
            CalService.finish($scope.currentMonth);
            return;
        }

        if(!$scope.report) {
            errprint($mdToast,'The format of the report is incorrect！');
            return;
        }

        let data = $scope.report.split(',');
        if(data.length!=3) {
            errprint($mdToast,'The format of the report is incorrect！');
            return;
        }

        data[0] = Number(data[0]);
        data[1] = Number(data[1]);
        data[2] = Number(data[2]);
        if(isNaN(data[0])||isNaN(data[1])||isNaN(data[2])) {
            errprint($mdToast,'The format of the report is incorrect！');
            return;
        }

        if(!CalService.addReport(data))
            errprint($mdToast,'locks up to 70/stocks up to 80/barries up to 90 per month!');
        else{
            errprint('Success!');
            $scope.report = '00,00,00';
        }
    };
};