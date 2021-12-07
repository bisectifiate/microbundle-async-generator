import test from 'ava';

import {macro} from './_fixtures.js';

import {toArrayForAwait} from '#module';

test(macro, toArrayForAwait, 0);
test(macro, toArrayForAwait, 3);
test(macro, toArrayForAwait, 100);
