var barrels = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs'
];
var cliSystemConfigPackages = {
  'app': {
    defaultExtension: 'js'
  },
  'components': {
    defaultExtension: 'js'
  },
  'services': {
    defaultExtension: 'js'
  },
  'pipes': {
    defaultExtension: 'js'
  },
  'directives': {
    defaultExtension: 'js'
  }
};
barrels.forEach(function(barrelName){
  cliSystemConfigPackages[barrelName] = {
    main: 'index.js'
};
});
System.config({
  map: {
    '@angular': '@angular',
    'rxjs': 'rxjs'
  },
  packages: cliSystemConfigPackages
});
