import assert from 'node:assert/strict';
import test from 'node:test';
import { analyticsAllowed, parseConsent, privacyModeForLocation } from '../lib/consent.ts';

for (const [country, region, expected] of [
  ['US', 'CA', 'opt-in'], ['US', 'MA', 'opt-out'], ['US', 'FL', 'opt-out'],
  ['US', null, 'opt-out'], ['GB', null, 'opt-in'], ['DE', null, 'opt-in'],
  ['NO', null, 'opt-in'], ['CH', null, 'opt-in'], ['CA', 'ON', 'opt-out'],
  [null, null, 'opt-in'], ['us', 'ca', 'opt-in'],
]) {
  test(`${country}/${region} uses ${expected}`, () => assert.equal(privacyModeForLocation(country, region), expected));
}

test('new visitors follow the regional default and Global Privacy Control', () => {
  assert.equal(analyticsAllowed(null, 'opt-in', false), false);
  assert.equal(analyticsAllowed(null, 'opt-out', false), true);
  assert.equal(analyticsAllowed(null, 'opt-out', true), false);
});

test('saved accept and reject choices win over regional defaults, matching Brandywine', () => {
  for (const mode of ['opt-in', 'opt-out']) for (const gpc of [false, true]) {
    assert.equal(analyticsAllowed('analytics:no', mode, gpc), false);
    assert.equal(analyticsAllowed('analytics:yes', mode, gpc), true);
  }
});

test('only recognized saved choices are accepted', () => {
  for (const value of [null, '', 'unknown', 'true', 'analytics:yes;analytics:no']) assert.equal(parseConsent(value), null);
  assert.equal(parseConsent('analytics:yes'), 'analytics:yes');
  assert.equal(parseConsent('analytics:no'), 'analytics:no');
});
