function managerEntries(entry = []) {
  return [...entry, require.resolve("./dist/cjs/manager")];
}

module.exports = { managerEntries };
