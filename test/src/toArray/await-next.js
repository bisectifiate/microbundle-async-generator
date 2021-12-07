import test from 'ava';

import {macro} from './_fixtures.js';

import {toArrayAwaitNext} from '#module';

test(macro, toArrayAwaitNext, 0);
test(macro, toArrayAwaitNext, 3);
test(macro, toArrayAwaitNext, 100);
