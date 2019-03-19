function quickTest({ description = '', expect, toBe }) {
  const value = expect();
  const descriptionText = `${description ? `Test: '${description}' `: ''}`;

  const result = toBe === value
    ? `${descriptionText}✅ Passed`
    : `${descriptionText}❌ Failed, returned => ${value}`;

  if (description) console.log(result);
  return result;
}

module.exports = quickTest;
