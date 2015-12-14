define(function (require) {
  var marked = require('marked');
  marked.setOptions({
    gfm: true, // Github-flavored markdown
    sanitize: true // Sanitize HTML tags
  });

  var module = require('ui/modules').get('kibana/wd_generator_vis', ['kibana']);
  module.controller('KbnWdGeneratorVisController', function ($scope, $sce) {
    $scope.$watch('vis.params.wd_generator', function (html) {
      if (!html) return;
      $scope.html = $sce.trustAsHtml(marked(html));
    });
  });
});
