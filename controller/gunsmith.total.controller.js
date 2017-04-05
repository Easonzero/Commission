/**
 * Created by eason on 17-4-5.
 */
module.exports = function($scope,CalService){
    $scope.chartData = [];

    for(let clientName of CalService.getAllClients()){
        let data = [],reports = CalService.getClientHistory(clientName);
        for(let i=0;i<12;i++){
            if(reports[i]) data[i] = CalService.getTotalSales(clientName,i);
            else data[i] = 0;
        }
        $scope.chartData.push({
            clientName:clientName,
            data:data
        });
    }
};