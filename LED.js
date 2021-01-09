const { Gpio } = require('onoff')

// set BCM 17 pin as 'input'
const switchIn = new Gpio('17', 'in', 'both')

// listen for pin voltage change
switchIn.watch((err, value) => {
  if (err) {
    console.log('Error', err)
  }

  // log pin value (0 or 1)
  console.log('Pin value', value)
})

const ledOut = new Gpio( '16', 'out' );

// current LED state
let isLedOn = false;

// run a infinite interval
setInterval( () => {
  ledOut.writeSync( isLedOn ? 0 : 1 ); // provide 1 or 0 
  isLedOn = !isLedOn; // toggle state
}, 1000 ); // 3s
