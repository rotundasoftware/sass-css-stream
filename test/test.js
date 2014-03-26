var sassCssStream = require( '../' );
var fs = require( 'fs' );
var path = require( 'path' );

var inputFile = path.join( __dirname, "sampleStyle.scss" );

fs.createReadStream( inputFile ).pipe( sassCssStream( inputFile, { outputStyle : "compressed" } ) ).pipe( process.stdout );
