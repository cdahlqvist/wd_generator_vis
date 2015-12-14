module.exports = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: [
        'plugins/wd_generator_vis/wd_generator_vis'
      ]
    }

  });

};
