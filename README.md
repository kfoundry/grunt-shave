# grunt-shave

> For those times when javascripts have to be dynamically created at build time!
> `shave` uses `Mustache` and `Config` to pre-compile source code that have
> placeholders that have to be replaced at build-time (e.g., database configuration code)

```js
var db = new Db("mydb", new Server("127.0.0.1", 27017,
 {auto_reconnect: false, poolSize: 4}), {safe:false, native_parser: false});
```

Which can be replaced with

```js
var db = new Db("{{db_name}}", new Server("{{server_name}}", 27017,
 {auto_reconnect: false, poolSize: 4}), {safe:false, native_parser: false});
```
and a settings yaml file inside `config/default.yml` such as

```yaml
Server:
  server_name: "localhost"
  db_name: "mydb"
```

## Getting Started
This plugin requires Grunt `~0.4.1`, [Mustache](https://github.com/janl/mustache.js) `~0.7.2` and [Config](https://github.com/lorenwest/node-config) : `~0.4.25`,

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-shave --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-shave');
```

## The "shave" task

### Overview
In your project's Gruntfile, add a section named `shave` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  shave: {
    options: {key1: val1, key2: val2}, // This is the hash passed to mustache for replacements (key1 will be replaced by val1 etc.)
    src: "js/all_in_one.js", // The source file that you want transformed (after replacing placeholders)
    dest: "js/after_transformation.js" // this is where the transformed file (after placeholders are replaced) will be placed.
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
