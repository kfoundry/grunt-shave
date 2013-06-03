/*
 * grunt-shave
 * https://github.com/kfoundry/grunt-shave.git
 *
 * Copyright (c) 2013 Raghuram Sreenath
 * Licensed under the MIT license.
 */

'use strict';
var config = require('config');
var mustache = require('mustache');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerTask('shave', 'Explode Mustache templates with config params for replacement.', function() {
                           
                           // Merge task-specific and/or target-specific options with these defaults.
                           var options = this.options({
                                                          mainKey: 'Server',
                                                          srcFile: 'js/all.js' // Modify to take in an array
                                                      });
                           var src = grunt.file.read(options.srcFile);
                           var hsh = config[options.mainKey];
                           var ret =  mustache.render(src, hsh);
                           grunt.log.write("Returning " + ret);
                           return ret;
                       });

};
