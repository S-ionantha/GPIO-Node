const { Gpio } = require('onoff')

// set BCM 17 pin as 'input'
const GPIO_17 = new Gpio('17', 'in', 'both')
const GPIO_18 = new Gpio('18', 'in', 'both')
const GPIO_27 = new Gpio('27', 'in', 'both')
let GPIO_17_value =null
let GPIO_18_value =null
let GPIO_27_value =null

// listen for pin voltage change
GPIO_17.watch((err, value) => {
  if (err) {
    console.log('Error', err)
  }
  GPIO_17_value = value
  console.log('GPIO_17', GPIO_17_value)
})

GPIO_18.watch((err, value) => {
  if (err) {
    console.log('Error', err)
  }
  GPIO_18_value = value
  console.log('GPIO_18', GPIO_18_value)
})

GPIO_27.watch((err, value) => {
  if (err) {
    console.log('Error', err)
  }
  GPIO_27_value = value
  console.log('GPIO_27', GPIO_27_value)
})

const ledOut = new Gpio( '16', 'out' );

// current LED state
let isLedOn = false;

// run a infinite interval
setInterval( () => {
  ledOut.writeSync( isLedOn ? 0 : 1 ); // provide 1 or 0 
  isLedOn = !isLedOn; // toggle state
}, 1000 ); // 3s
