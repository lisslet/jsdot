import {dot} from '../dist/core/dot.js';
import {query$} from '../dist/operators/query.js';
import {$css} from '../dist/operators/css.js';
import {$log} from '../dist/operators/log.js';

window.addEventListener('DOMContentLoaded', () => {


	console.log(dot('body')
		.pipe(
			query$('div, span'),
			$css('color', 'red'),
			$log
		)
	);

});