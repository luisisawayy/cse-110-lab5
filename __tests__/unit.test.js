// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber tests
test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number with no separators', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number - too short', () => {
  expect(isPhoneNumber('123-45-789')).toBe(false);
});

// isEmail tests
test('valid email with common domain', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('valid email with underscore domain', () => {
  expect(isEmail('user@domain_abc.org')).toBe(true);
});

test('invalid email without @ symbol', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('invalid email with numbers in TLD', () => {
  expect(isEmail('user@domain.c0m')).toBe(false);
});

// isStrongPassword tests
test('valid strong password', () => {
  expect(isStrongPassword('abc_123')).toBe(true);
});

test('valid strong password starting with letter', () => {
  expect(isStrongPassword('Zpass123')).toBe(true);
});

test('invalid strong password with special char', () => {
  expect(isStrongPassword('abc$123')).toBe(false);
});

test('invalid strong password too short', () => {
  expect(isStrongPassword('a1')).toBe(false);
});

// isDate tests
test('valid date in MM/DD/YYYY', () => {
  expect(isDate('12/31/2024')).toBe(true);
});

test('valid date with single-digit month/day', () => {
  expect(isDate('1/1/2023')).toBe(true);
});

test('invalid date with dashes instead of slashes', () => {
  expect(isDate('01-01-2023')).toBe(false);
});

test('invalid date with 3-digit year', () => {
  expect(isDate('01/01/123')).toBe(false);
});

// isHexColor tests
test('valid 3-digit hex color without #', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('valid 6-digit hex color with #', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});

test('invalid hex color with 4 digits', () => {
  expect(isHexColor('abcd')).toBe(false);
});

test('invalid hex color with invalid characters', () => {
  expect(isHexColor('#zzzzzz')).toBe(false);
});
