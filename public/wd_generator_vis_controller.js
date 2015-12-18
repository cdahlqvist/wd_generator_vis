define(function (require) {
  var module = require('ui/modules').get('kibana/wd_generator_vis', ['kibana']);
  module.controller('KbnWdGeneratorVisController', function ($scope, $sce) {
    $scope.vis = {
      params: {
        wd_generator: {
          description: "This is the default description.",
          host: "http://127.0.0.1:8443",
          result: {
            server_failure: "[Not Initiated]",
            exploit: "[Not Initiated]",
            dead_link: "[Not Initiated]"
          }
        }
      }
    };
    
    $scope.vis.params.wd_generator.stat = "Not executed...";

    $scope.simulate = function(value) {
      $scope.vis.params.wd_generator.stat = value + " is about to run against " + $scope.vis.params.wd_generator.host;

      $scope.vis.params.wd_generator.result[value] = "[Executing...]";

      var req = $scope.vis.params.wd_generator.host + "/" + value;

      $http.get(req).then(function(response) {
        $scope.vis.params.wd_generator.stat = value + " actually ran!!";

        if(response.data.result == 'ok') {
          $scope.vis.params.wd_generator.result[value] = '[Success]';
        } else {
          $scope.vis.params.wd_generator.result[value] = '[Failure]';
        }

        $scope.vis.params.wd_generator.stat = value + " actually ran and all was updated!!";
      });
    };
  });
});
