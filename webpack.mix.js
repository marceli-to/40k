const mix = require('laravel-mix');

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': __dirname + '/resources/js/vue/',
    },
  },
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Frontend: CSS
mix.sass('resources/sass/app.scss', 'public/assets/css/app.css').options({processCssUrls: false}).version();

// Frontend: validation.js
mix.js('resources/js/vanilla/app.js', 'public/assets/js/validation.js');

// Frontend: app.js
mix.js('resources/js/vue/modules/app/Index.js', 'public/assets/js/app.js').version();
