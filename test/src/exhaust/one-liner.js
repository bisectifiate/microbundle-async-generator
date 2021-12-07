import test from 'ava';

import {macro} from './_fixtures.js';

import {exhaustOneLiner} from '#module';

test(macro, exhaustOneLiner, 0);
test(macro, exhaustOneLiner, 3);
test(macro, exhaustOneLiner, 100);
