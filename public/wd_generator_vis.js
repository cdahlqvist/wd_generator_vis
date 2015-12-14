define(function (require) {
  // we need to load the css ourselves
  require('plugins/wd_generator_vis/wd_generator_vis.less');

  // we also need to load the controller and used by the template
  require('plugins/wd_generator_vis/wd_generator_vis_controller');

  // register the provider with the visTypes registry so that other know it exists
  require('ui/registry/vis_types').register(WdGeneratorVisProvider);

  function WdGeneratorVisProvider(Private) {
    var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'wd_generator',
      title: 'WD Generator widget',
      icon: 'fa-code',
      description: 'Used for initiating events on the WD generator.',
      template: require('plugins/wd_generator_vis/wd_generator_vis.html'),
      params: {
        editor: require('plugins/wd_generator_vis/wd_generator_vis_params.html')
      },
      requiresSearch: false
    });
  }

  // export the provider so that the visType can be required with Private()
  return WdGeneratorVisProvider;
});
