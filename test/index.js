import {RowControl} from '../dist/extends/row-control/row-control.js';
import {query$} from '../dist/operators/query.js';
import {dot} from '../dist/core/dot.js';
import {$ready} from '../dist/operators/ready.js';
import {$prepend} from '../dist/operators/prepend.js';
import {$append} from '../dist/operators/append.js';

dot(window).pipe($ready(function () {
	RowControl.forRoot();

	var div = document.createElement('div');
	div.innerHTML = 'prepend';

	var div2 = document.createElement('div');
	div2.innerHTML = 'append';
	dot('body').pipe(query$('div'), $prepend([div, div2]));
}));