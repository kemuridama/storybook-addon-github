function managerEntries(entry = []) {
  return [...entry, require.resolve("./dist/manager")];
}

export default { managerEntries };
