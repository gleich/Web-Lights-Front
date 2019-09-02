const functions = require('firebase-functions');

exports.makeUppercase = functions.database
  .ref('/lights/active')
  .onUpdate((snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    const original = snapshot.val();
    let x = [false, false, false];
    x[original - 1] = true;
    functions.database.ref('/lights/list').set(x);
  });
