var through = require( "through" );
var sass = require( "node-sass" );
var path = require( "path" );

module.exports = function( file ) {
	if( file !== undefined && path.extname( file ) !== ".scss" )
		return through();
	else
		return through( write, end );

	var data = "";

	function write(buf) {
		data += buf;
	}

	function end() {
		this.queue( sass.renderSync( data ) );
		this.queue( null );
	}
};