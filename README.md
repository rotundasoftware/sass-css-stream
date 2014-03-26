sass-css-stream
===============

A sass to css stream wrapper around [node-sass](https://github.com/andrew/node-sass).  Returns a [through stream](https://github.com/dominictarr/through) that has sass contents written in and outputs the compiled css.

Can be used as a sass to css transform for [parcelify](https://github.com/rotundasoftware/parcelify).

#example
```javascript
var sassCssStream = require( '../' );
var fs = require( 'fs' );
var path = require( 'path' );

var inputFile = path.join( __dirname, "sampleStyle.scss" );

fs.createReadStream( inputFile ).pipe( sassCssStream( inputFile) ).pipe( process.stdout );
```

#usage

### sassCssStream( file [, opts ] )

`file` - the sass file being 

`opts` - optional options hash passed through to `node-sass.renderSync`
