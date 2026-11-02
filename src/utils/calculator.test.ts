import test from 'node:test';
import assert from 'node:assert/strict';
import { getWhatsAppServiceUrl, getEmergencyWhatsAppUrl, SERVICES_CATALOG, CITY_NAME, PHONE_NUMBER } from './calculator.js';

test('services catalog has all 7 services from flyer', () => {
  assert.equal(SERVICES_CATALOG.length, 7);
  const names = SERVICES_CATALOG.map((s) => s.name);
  assert.ok(names.includes('Desentupimento'));
  assert.ok(names.includes('Arruma Vazamentos'));
  assert.ok(names.includes('Elétrica'));
  assert.ok(names.includes('Hidráulica'));
  assert.ok(names.includes('Pintura'));
  assert.ok(names.includes('Manutenção em Geral'));
  assert.ok(names.includes('Arruma Vazamento em Telhados'));
});

test('location is Campo Novo do Parecis - MT', () => {
  assert.equal(CITY_NAME, 'Campo Novo do Parecis - MT');
});

test('getWhatsAppServiceUrl generates link with Campo Novo do Parecis and phone', () => {
  const url = getWhatsAppServiceUrl('Desentupimento');
  assert.ok(url.includes(`55${PHONE_NUMBER}`));
  assert.ok(url.includes(encodeURIComponent('Campo Novo do Parecis - MT')));
  assert.ok(url.includes(encodeURIComponent('Desentupimento')));
});

test('getEmergencyWhatsAppUrl generates emergency 24h link', () => {
  const url = getEmergencyWhatsAppUrl();
  assert.ok(url.includes(`55${PHONE_NUMBER}`));
  assert.ok(url.includes(encodeURIComponent('PLANTÃO 24H')));
  assert.ok(url.includes(encodeURIComponent('Campo Novo do Parecis - MT')));
});
