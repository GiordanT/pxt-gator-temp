# gator:temp Temperature Sensor

[![Community Discord](https://img.shields.io/discord/448979533891371018.svg)](https://aka.ms/makecodecommunity)

The gator:starter, which includes the gator:light and gator:temp can be purchased [here.](https://www.sparkfun.com/products/14891)
The gator:temp, included on the gator:starter is an analog temperature sensor that can be alligator clipped to the micro:bit or gator:bit board.

![SparkFun gator:temp](https://raw.githubusercontent.com/sparkfun/pxt-gator-temp/master/icon.png)  

## ~ hint

To use this package, go to https://makecode.microbit.org, click ``Add package`` and search for **gator-temp**. The package is located [here](https://makecode.microbit.org/pkg/sparkfun/pxt-gator-temp)

## ~

## Basic usage

```blocks
//Sets the value of the temperature variable to the value read from the gator:temp
let temperature = 0
temperature = gatortemp.temp(AnalogPin.P0, GatorTempType.F)
```

Use ``||Get Temperature on Pin||`` to read the temperature from a gator:temp sensor attached to a certain pin in Celsius, Fahrenheit or the straight ADC value.

## Example:Basic Thermometer

This program will take a temperature reading and display it on the micro:bit's screen.

```blocks
//Read temperature in Fahrenheit and write it the micro:bit's screen.
basic.forever(function () {
    basic.showNumber(gatortemp.temp(AnalogPin.P0, GatorTempType.F))
})
```

## Supported targets

* for PXT/microbit

## License

MIT

```package
gatorMoisture=github:giordant/Moisture
```