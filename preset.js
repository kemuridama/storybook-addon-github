function managerEntries(entry = []) {
  return [...entry, require.resolve("./dist/manager")];
}

module.exports = { managerEntries };
