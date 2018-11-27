// Code your solution in this file!
const logDriverNames = function(array) {
  array.forEach( function(driver) { console.log(driver.name); });
}
const logDriversByHometown = function(array, arg) {
  array.forEach( function(driver) { if (driver.hometown === arg) console.log(driver.name); });
}

const driversByRevenue = function(array) {
  return array.slice().sort( function(a, b) { return a.revenue - b.revenue; });
}

const