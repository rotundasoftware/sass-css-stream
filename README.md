sass-css-stream
===============

A sass to css stream wrapper around [node-sass](https://github.com/andrew/node-sass).

Takes a file argument and an optional opts argument that is passed through to node-sass. Returns a [through stream](https://github.com/dominictarr/through) that has sass contents written in and outputs the compiled css.

Can be as a [parcelify](https://github.com/rotundasoftware/parcelify) or [cartero](https://github.com/rotundasoftware/cartero) transform.

#example
```javascript
var sassCssStream = require( '../' );
var fs = require( 'fs' );
var path = require( 'path' );

var inputFile = path.join( __dirname, "sampleStyle.scss" );

var opts = { includePaths : [ path.resolve( __dirname, 'bourbon' ) ] };

fs.createReadStream( inputFile ).pipe( sassCssStream( inputFile, opts ) ).pipe( process.stdout );
```

#usage

### sassCssStream( file [, opts ] )

`file` - the sass file being 

`opts` - optional options hash passed through to `node-sass.renderSync`
