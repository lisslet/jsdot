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

/*
import {Wait} from '../dist/patterns/wait/wait.js';

Wait.for((waiter) => {
	setTimeout(() => {
		console.log('next');
		waiter.next('test');
	}, 1000);
})
	.then(res => {
		console.log(res);
	});
 */

import {Works} from '../dist/work/work.js';

const works = Works.by(new Worker('../dist/work/test-worker.js', {type: 'module'}));

const test = works.do('test');

test.request({a: 'a'});