/* eslint-disable no-undef */

import { Validator } from "../src/telephone.js";
import {test, expect} from '@jest/globals';








test.each([
    ["+89123456789",  "+89123456789"],
    ["+89123456789",  "+89123456789"],
    ["+891234-56-78-9", "+89123456789"],
    ["+8 912 345 67 89", "+89123456789"],
  ])('testing number (%s)', (number, expected) => {
    const result = new Validator(number);
    const result1 = result.validateNumber(number)
    expect(result1).toBe(expected);
  });