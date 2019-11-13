const gulp       = require('gulp');
const {task, watch, src, dest} = gulp;

const pump       = require('pump');
const sourcemaps = require('gulp-sourcemaps');
const babel      = require('gulp-babel');

const typescript        = require('gulp-typescript');
const tsDefault = typescript.createProject('./tsconfig.default.json');
const tsWorker = typescript.createProject('./tsconfig.worker.json');

const $src   = './src/';
const $dist  = './dist/';

const babelOptions = require('./babel.json');

const tsFiles = $src + '**/*.ts';
const tsWorkers = $src + '**/*worker.ts';
const jsFiles = $src +'**/*.js';

task('compile-ts', () => {
	return pump([
		src([tsFiles, '!'+tsWorkers]),
		sourcemaps.init(),
		tsDefault(),
		sourcemaps.write('.'),
		dest($dist)
	]);
});

task('compile-ts-worker', () => {
	return pump([
		src(tsWorkers),
		sourcemaps.init(),
		tsWorker(),
		sourcemaps.write('.'),
		dest($dist)
	])
});

task('compile-js', () => {
	return pump([
		src(jsFiles),
		sourcemaps.init(),
		babel(babelOptions),
		sourcemaps.write('.'),
		dest($dist)
	]);
});


task('compile-script', gulp.series([
	'compile-ts',
	'compile-ts-worker',
	//'compile-js'
]));

task('watch-script', done => {
	watch(tsFiles, gulp.series('compile-ts'));
	watch(tsWorkers, gulp.series('compile-ts-worker'));
	//watch(jsFiles, gulp.series('compile-js'));

	return done;
});

task('default', gulp.parallel([
	'compile-script',
	'watch-script'
]));