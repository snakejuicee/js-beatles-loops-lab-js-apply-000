// add solution here
function theBeatlesPlay(a,b) {
  var s = [];
  
  for (var i = 0; i < a.length; i++) {
    // s.push(a[i] + " plays " + b[i]);
    s.push(`${a[i]} plays ${b[i]}`)
  }
  return s;
}