// Code your solution in this file!
const logDriverNames = function(array) {
  array.forEach( function(d) { console.log(d.name); });
};
const logDriversByHometown = function(array, arg) {
  array.forEach( function(d) { if (d.hometown === arg) console.log(d.name); });
};

const driversByRevenue = function(array) {
  return array.slice().sort( function(a, b) { return a.revenue - b.revenue; });
};

const driversByName = function(array) {
  return array.slice().sort( function(a, b) { return a.name.localeCompare(b.name); });
};

const totalRevenue = function(array) {
  return array.reduce( function(tot, d) { return d.revenue + tot; }, 0);
};

const averageRevenue = function(array) {
  return totalRevenue(array) / array.length
};
