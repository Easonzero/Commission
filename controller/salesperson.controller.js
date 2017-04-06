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
    $scope.clientName = 'easonzero';

    $scope.submit = function(){
        let index = $scope.months.indexOf($scope.currentMonth);
        if($scope.report=='-1'){
            errprint($mdToast,`Finish a ${$scope.currentMonth} report!`);
            CalService.finish($scope.clientName,index);
            return;
        }

        if(!$scope.report) {
            errprint($mdToast,'report is requested');
            return;
        }

        if(!$scope.clientName) {
            errprint($mdToast,'clientName is requested');
        }

        let data = $scope.report.split(',');
        if(data.length!=3) {
            errprint($mdToast,'The format of the report is incorrect！');
            return;
        }

        data[0] = Number(data[0]);
        data[1] = Number(data[1]);
        data[2] = Number(data[2]);
        if(isNaN(data[0])||isNaN(data[1])||isNaN(data[2])||data[0]<0||data[1]<0||data[2]<0) {
            errprint($mdToast,'The format of the report is incorrect！');
            return;
        }

        data[0] = parseInt(data[0]);
        data[1] = parseInt(data[1]);
        data[2] = parseInt(data[2]);

        if(!CalService.addReport($scope.clientName,data))
            errprint($mdToast,'locks up to 70/stocks up to 80/barries up to 90 per month!');
        else{
            errprint($mdToast,'Success!');
            $scope.report = '00,00,00';
        }
    };
};