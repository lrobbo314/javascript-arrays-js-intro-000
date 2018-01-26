var chocolateBars = ['snickers', 'hundred grand', 'kitkat'];

function addElementToBeginningOfArray(v, e) {
  v = [e, ...v];
  return v;
}

function destructivelyAddElementToBeginningOfArray(v, e) {
  v.unshift(e);
  return v;
}

function addElementToEndOfArray(v, e) {
  v = [...v, e];
  return v;
}

function destructivelyAddElementToEndOfArray(v, e) {
  v.push(e);
  return v;
}

function accessElementInArray(v, i) {
  return v[i];
}

function destructivelyRemoveElementFromBeginningOfArray(v) {
  v = v.shift();
}
