function quickTest({ description = '', expect, toBe }) {
  const value = expect();
  return toBe === value
    ? `${description} ✅ Passed`
    : `${description} ❌ Failed, returned => ${value}`;
}

module.exports = quickTest;
