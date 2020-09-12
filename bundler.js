const { createProxyMiddleware } = require( 'http-proxy-middleware' );
const Bundler = require( 'parcel-bundler' );
const express = require( 'express' );

const bundler = new Bundler( './index.html' );

const app = express();

app.use(
	'/api',
	createProxyMiddleware( {
		target: 'http://localhost:9191'
	} )
);

app.use( bundler.middleware() );

app.listen( Number( process.env.PORT || 1234 ) );
