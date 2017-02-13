var path = require('path');
var express = require('express')
var app = express();
if (process.env.NODE_ENV !== 'production'){
  const webpack = require('webpack')
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackConfig = require('./webpack.config.js')
  app.use(webpackDevMiddleware(webpack(webpackConfig)))
  const compiler = webpack(webpackConfig);
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true, publicPath: webpackConfig.output.path
	}));
  app.use(webpackHotMiddleware(compiler));

}
app.use(express.static(__dirname + '/public'))
app.set('port', process.env.PORT || 4000);
app.set('host', process.env.HOST || 'localhost');
app.listen(app.get('port'), function(){
  console.log('server listening on 4000')
});
