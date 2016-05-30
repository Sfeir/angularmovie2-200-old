var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router-deprecated',
    '@angular/router-deprecated',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',

    // Thirdparty barrels.
    'rxjs'
];
var cliSystemConfigPackages = {
    'ts': {
        defaultExtension: 'js'
    }
};
barrels.forEach(function(barrelName){
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
System.config({
    map: {
        '@angular': '@angular',
        'rxjs': 'rxjs',
        'main': 'ts/bootstrap.js',
        'app': 'app'
    },
    packages: cliSystemConfigPackages
});