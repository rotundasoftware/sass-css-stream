var through = require( "through" );
var sass = require( "node-sass" );
var path = require( "path" );

module.exports = function( file, opts ) {
	var data = "";
	if( file !== undefined && path.extname( file ) !== ".scss" )
		return through();
	else {
		return through( write, end );
	}

	function write(buf) {
		data += buf;
	}

	function end() {
		try {
			var sassOpts = {};

			sassOpts.data = data;

			var pathToAdd = [ path.dirname( file ) ];
			sassOpts.includePaths = Array.isArray( opts && opts.includePaths ) ?
			                    opts.includePaths.concat( pathToAdd ) :
			                    pathToAdd;

			var result = sass.renderSync( sassOpts );
			if( result instanceof Error ) {
				throw result;
			}

			this.queue( result.css );
		} catch( err ) {
			this.emit( 'error', new Error( err ) );
		}

		this.queue( null );
	}
};
