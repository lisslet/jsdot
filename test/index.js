/*
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

 */

import {Dates} from '../dist/extends/dates.js';
import {Works} from '../dist/patterns/worker/works.js';

const now = new Dates;

// console.log(now.format('d, D, j, l, N S, w, z'));
// console.log(now.format('W'));
// console.log(now.format('F, m, M, n, t'));
// console.log(now.format('L, o, Y, y'));
// console.log(now.format('a, A, B, g, G, -> h, -> H, i, s, u, v'));
// console.log(now.format('e, I, O, P, T, Z'));
// console.log(now.format('c, r, U'));

const works = new Works('test.js');

works.job('works');