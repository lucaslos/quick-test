function quickTest({ description = '', expect, toBe }) {
  const descriptionText = `${description ? `Test: '${description}' `: ''}`;

  const result = toBe === expect
    ? `${descriptionText}✅ Passed`
    : `${descriptionText}❌ Failed, returned => ${expect}`;

  if (description) console.log(result);
  return result;
}

module.exports = quickTest;
