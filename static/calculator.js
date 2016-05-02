/* JavaScript Document */


(function(){
    var app = angular.module("calculator", []);

    app.controller("ctl", ['$scope',function($scope){

            $scope.lumen_options = [375, 600, 900, 1125, 1600];
            $scope.current_lumens = 375;
            $scope.current_hours = 0;
            $scope.current_cost = 12;
            $scope.days = 365;

            $scope.inc_conversion = .0625;
            $scope.hal_conversion = .0450;
            $scope.cfl_conversion = .0146;
            $scope.led_conversion = .0125;


            $scope.calc = function(){
                //alert("change")
                $scope.inc_watts = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
                $scope.hal_watts = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
                $scope.cfl_watts = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
                $scope.led_watts = ($scope.current_lumens * $scope.led_conversion).toFixed(1);


                var total_hours = $scope.days * $scope.current_hours;
                var cost =  $scope.current_cost/100;

                $scope.inc_cost = ((($scope.inc_watts * total_hours) / 1000 ) * cost).toFixed(2);
                $scope.hal_cost = ((($scope.hal_watts * total_hours) / 1000 ) * cost).toFixed(2);
                $scope.cfl_cost = ((($scope.cfl_watts * total_hours) / 1000 ) * cost).toFixed(2);
                $scope.led_cost = ((($scope.led_watts * total_hours) / 1000 ) * cost).toFixed(2);
            }

            $scope.over_24 = function(){
                    if($scope.current_hours > 24){
                            alert("hi")
                            $scope.current_hours = 24;
                    }
                    $scope.calc();
            }

    }]);






})();