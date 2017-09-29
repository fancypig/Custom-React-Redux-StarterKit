var path = require('path');
var express = require('express')
var app = express();
var cors = require('cors');
if (process.env.NODE_ENV !== 'production'){
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackConfig = require('./webpack.config.js')
  app.use(webpackDevMiddleware(webpack(webpackConfig)))
}



app.use(express.static(__dirname + '/public'))
app.get('*', function(req, res){
	res.sendFile(path.resolve('public/index.html'));
});

app.set('port', process.env.PORT || 4000);
app.set('host', process.env.HOST || 'localhost');

app.listen(app.get('port'), function(){
  console.log('server listening on 4000')
});
