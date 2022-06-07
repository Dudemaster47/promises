function stretch() {
  const newP = new Promise((res, rej) => {
    setTimeout(() => {
      res('done stretching');
    }, 1000);
  });
  newP.then(value => {
    console.log(value);
  });
}

function runOnTreadmill() {
  const newP = new Promise((res, rej) => {
    setTimeout(() => {
      res('done running on treadmill');
    }, 500);
  });
  newP.then(value => {
    console.log(value);
  });
}

function liftWeights() {
  const newP = new Promise((res, rej) => {
    setTimeout(() => {
      res("done lifting weights");
    }, 2000);
  });
  newP.then(value => {
    console.log(value
      + `
done working out`);
  });
}

function workout() {
  stretch();
  runOnTreadmill();
  liftWeights();
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out