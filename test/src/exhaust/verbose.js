import test from 'ava';

import {macro} from './_fixtures.js';

import {exhaustVerbose} from '#module';

test(macro, exhaustVerbose, 0);
test(macro, exhaustVerbose, 3);
test(macro, exhaustVerbose, 100);
