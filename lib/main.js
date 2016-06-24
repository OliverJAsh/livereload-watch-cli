const fs = require('fs');
const path = require('path');
const livereload = require('gulp-livereload');
const chokidar = require('chokidar');

livereload.listen();

chokidar.watch(process.argv.slice(2), { ignoreInitial: true }).on('all', (event, path) => {
	livereload.changed(path);
});
