/* eslint-disable no-undef */

import { Validator } from '../src/nickname.js'
import {test, expect} from '@jest/globals';




test.each([
    ["A124d",  true],
    ["2Abc1d",  false],
    ["_Abc1f", false],
    ["-Abc1g", false],
    ["Abc3", false],
    ["Abc123-", false],
  ])('testing nick (%s)', (nick, expected) => {
    const result = new Validator(nick);
    const result1 = result.validateUsername(nick)
    expect(result1).toBe(expected);
  });