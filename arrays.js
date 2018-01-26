var chocolateBars = ['snickers', 'hundred grand', 'kitkat'];

function addElementToBeginningOfArray(v, e) {
  v = [e, ...v];
  return v;
}

function destructivelyAddElementToBeginningOfArray(v, e) {
  v.unshift(e);
}
