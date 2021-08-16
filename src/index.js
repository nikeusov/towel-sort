
module.exports = function towelSort (m) {
  if (!m || m.length === 0 ) {
    return []
  }

  let rev = [];
  for (let i = 0; i < m.length; i++) {
      let ver = ((i + 1) % 2 === 0) ? m[i].reverse() : m[i];
      rev.push(ver);
  }
  return rev.flat();
}
