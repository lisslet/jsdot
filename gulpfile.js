const gulp       = require('gulp');
const pump       = require('pump');
const sourcemaps = require('gulp-sourcemaps');
const babel      = require('gulp-babel');

const typescript        = require('gulp-typescript');
const typescriptProject = typescript.createProject('./tsconfig.json');

const src   = './src/';
const dist  = './dist/';

const babelOptions = require('./babel.json');

const tsFiles = src + '**/*.ts';
const jsFiles = src +'dist/**/*.js';

gulp.task('compile-typescript', () => {
	return pump([
		gulp.src(tsFiles),
		sourcemaps.init(),
		typescriptProject(),
		sourcemaps.write('.'),
		gulp.dest(dist)
	]);
});

gulp.task('compile-javascript', () => {
	return pump([
		gulp.src(jsFiles),
		sourcemaps.init(),
		babel(babelOptions),
		sourcemaps.write('.'),
		gulp.dest(dist)
	]);
});


gulp.task('compile-script', gulp.series([
	'compile-typescript',
	//'compile-javascript'
]));

gulp.task('watch-script', done => {
	gulp.watch(tsFiles, gulp.series('compile-script'));
	return done;
});

gulp.task('default', gulp.parallel([
	'compile-script',
	'watch-script'
]));