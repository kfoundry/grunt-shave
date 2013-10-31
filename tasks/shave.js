/*
 * grunt-shave
 * https://github.com/kfoundry/grunt-shave.git
 *
 * Copyright (c) 2013 Raghuram Sreenath
 * Licensed under the MIT license.
 */

'use strict';
var mustache = require('mustache');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerTask('shave', 'Explode Mustache templates with config params for replacement.', function() {
                           
                           var options = grunt.config.get("shave");
                           var src = grunt.file.read(options.src);
                           var hsh = options.options;
                           var ret =  mustache.render(src, hsh);
                           grunt.file.write(options.dest, ret);
                           return ret;
                       });

};
