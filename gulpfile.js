const gulp       = require('gulp');
const {task, watch, src, dest} = gulp;

const pump       = require('pump');
const sourcemaps = require('gulp-sourcemaps');
const babel      = require('gulp-babel');

const typescript        = require('gulp-typescript');
const typescriptProject = typescript.createProject('./tsconfig.json');

const $src   = './src/';
const $dist  = './dist/';

const babelOptions = require('./babel.json');

const tsFiles = $src + '**/*.ts';
const jsFiles = $src +'**/*.js';

task('compile-typescript', () => {
	return pump([
		src(tsFiles),
		sourcemaps.init(),
		typescriptProject(),
		sourcemaps.write('.'),
		dest($dist)
	]);
});

task('compile-javascript', () => {
	return pump([
		src(jsFiles),
		sourcemaps.init(),
		babel(babelOptions),
		sourcemaps.write('.'),
		dest($dist)
	]);
});


task('compile-script', gulp.series([
	'compile-typescript',
	'compile-javascript'
]));

task('watch-script', done => {
	watch(tsFiles, gulp.series('compile-typescript'));
	watch(jsFiles, gulp.series('compile-javascript'));
	return done;
});

task('default', gulp.parallel([
	'compile-script',
	'watch-script'
]));