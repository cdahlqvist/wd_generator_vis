define(function (require) {
  var module = require('ui/modules').get('kibana/wd_generator_vis', ['kibana']);
  module.controller('KbnWdGeneratorVisController', function ($scope, $sce) {
    $scope.vis.params.wd_generator.exploit_result = false;
    $scope.vis.params.wd_generator.server_failure_result = false;
    $scope.vis.params.wd_generator.dead_link_result = false;
    $scope.vis.params.wd_generator.status = "";

    $scope.simulate = function(value) {
      var $req = $scope.vis.params.wd_generator.url + "/" + value;
      var $resp_var = value + "_result";

      $http.get($req).then(function(response) {
        if(response.result == 'ok') {
          $scope.vis.params.wd_generator[$resp_var] = 'Success';
        } else {
          $scope.vis.params.wd_generator[$resp_var] = 'Failure';
        }
      });

      $scope.vis.params.wd_generator.stat = value + " actually ran!!";
    };
  });
});
