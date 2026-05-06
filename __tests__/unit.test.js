// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// --- isPhoneNumber ---
test('valid phone number 1', () => expect(isPhoneNumber('123-456-7890')).toBe(true));
test('valid phone number 2', () => expect(isPhoneNumber('(123) 456-7890')).toBe(true));
test('invalid phone number 1', () => expect(isPhoneNumber('12345')).toBe(false));
test('invalid phone number 2', () => expect(isPhoneNumber('abcdefghij')).toBe(false));

// --- isEmail ---
test('valid email 1', () => expect(isEmail('test@example.com')).toBe(true));
test('valid email 2', () => expect(isEmail('a@b.co')).toBe(true));
test('invalid email 1', () => expect(isEmail('test@.com')).toBe(false));
test('invalid email 2', () => expect(isEmail('test.com')).toBe(false));

// --- isStrongPassword ---
test('valid strong password 1', () => expect(isStrongPassword('a1B2c3D4')).toBe(true));
test('valid strong password 2', () => expect(isStrongPassword('password123')).toBe(true));
test('invalid strong password 1', () => expect(isStrongPassword('1abc')).toBe(false)); // Starts with a number
test('invalid strong password 2', () => expect(isStrongPassword('ab')).toBe(false)); // Too short

// --- isDate ---
test('valid date 1', () => expect(isDate('01/01/2000')).toBe(true));
test('valid date 2', () => expect(isDate('1/1/2020')).toBe(true));
test('invalid date 1', () => expect(isDate('01-01-2000')).toBe(false));
test('invalid date 2', () => expect(isDate('2000/01/01')).toBe(false));

// --- isHexColor ---
test('valid hex color 1', () => expect(isHexColor('#FFF')).toBe(true));
test('valid hex color 2', () => expect(isHexColor('FF0000')).toBe(true));
test('invalid hex color 1', () => expect(isHexColor('#12')).toBe(false));
test('invalid hex color 2', () => expect(isHexColor('red')).toBe(false));