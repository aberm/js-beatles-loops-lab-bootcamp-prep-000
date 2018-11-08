// add solution here

function theBeatlesPlay(m, ins) {
  var z = [];
  for (var i = 0; i < m.length; i++) {
    z.push(`$(m[i]) plays $(ins[i])`)
  }
  return z
}