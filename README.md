# grunt-shave

> For those times when javascripts need to be dynamically created at build time!
> `shave` uses `Mustache` and `Config` to pre-compilation tasks where the source code can have
> placeholders that can be replaced at build-time (e.g., database configuration code)

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
    mainKey: "yourKey", // This is the key inside your config/default.yaml that you want to use as template
    srcFile: "js/all_in_one.js" // The source file that you want transformed (after replacing placeholders)
  }
})
```

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  shave: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
