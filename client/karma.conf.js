// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular", "karma-typescript"],
    plugins: [
      require("karma-jasmine"),
      //   require('karma-chrome-launcher'),
      require("karma-firefox-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-coverage")
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "coverage"),
      reports: ["html", "lcovonly"],
      fixWebpackSourcePaths: true
    },
    // preprocessors: {
    //   "src/**/*.ts": ["coverage", "karma-typescript"]
    // },
    reporters: ["progress", "kjhtml", "coverage", "karma-typescript"],
    coverageReporter: {
      dir: "coverage/",
      reporters: [{ type: "lcov" }]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Firefox"],
    singleRun: true
  });
};
