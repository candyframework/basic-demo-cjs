/**
 * @see https://candyframework.github.io/candyjs-guide/
 */
const CandyJs = require('candyjs');
const Candy = require('candyjs/Candy');
const App = require('candyjs/web/Application');

Candy.setPathAlias('@npm', __dirname + '/node_modules');

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app',
    // alias path of template engine
    'defaultView': 'npm/@candyjs/template-hbs/index'

})).listen(2333, function(){
    console.log('listen on 2333');
});
