import test from 'ava';

import {macro} from './_fixtures.js';

import {switchFallThrough} from '#module';

test(macro, switchFallThrough, 0, 'a', 'b', 'b');
