define(function (require) {
  var module = require('ui/modules').get('kibana/wd_generator_vis', ['kibana']);
  module.controller('KbnWdGeneratorVisController', function ($scope, $sce) {
    $scope.vis = {
      params: {
        wd_generator: {
          result: {}
        }
      }
    };
    $scope.vis.params.wd_generator.result.exploit = false;
    $scope.vis.params.wd_generator.result.server_failure = false;
    $scope.vis.params.wd_generator.result.dead_link = false;
    $scope.vis.params.wd_generator.stat = "Not executed...";

    $scope.simulate = function(value) {
      $scope.vis.params.wd_generator.stat = value + " is about to run...";

      vis.params.wd_generator.result[value] = "(Executing...)";

      var $req = $scope.vis.params.wd_generator.url + "/" + value;

      $http.get($req).then(function(response) {
        $scope.vis.params.wd_generator.stat = value + " actually ran!!";

        if(response.data.result == 'ok') {
          $scope.vis.params.wd_generator.result[value] = '(Success)';
        } else {
          $scope.vis.params.wd_generator.result[value] = '(Failure)';
        }

        $scope.vis.params.wd_generator.stat = value + " actually ran and all was updated!!";
      });
    };
  });
});
