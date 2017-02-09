const test = require('ava')
const latlngToDms = require('./index')

latlngToDms('37.419584, -122.087586')

test(t => {
  let dms = latlngToDms('37.419584, -122.087586')
  t.is(dms, '37° 25´ 10.50" N  122° 5´ 15.31" W')
})
