/**
* Mary West @ SparkFun Electronics
* July 3, 2017
* https://github.com/sparkfun/pxt-gator-temp

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun gatortemp sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the gatortemp sensor
 */

 enum gatorMoistureType{
  moisture=1,
  adcVal=2,
  Test = 3,
}

//% color=#8fce00 icon="\f7b4"
namespace gatorMoisture {

  // Functions for reading moisture from the gatormoisture in moisture or straight adv value

  /**
  * Reads the number
  */
  //% weight=30 blockId="gatorMoisture_moisture" block="Get moisture on pin %pin | in %gatorMoistureType"
  export function moisture(pin: AnalogPin, type: gatorMoistureType): number{
      let ADCVal = pins.analogReadPin(pin)
      switch(type){
          case gatorMoistureType.moisture: return getMoisture(ADCVal)
          case gatorMoistureType.adcVal: return ADCVal
          case gatorMoistureType.Test: return ADCVal
          default: return -11111111
      }
  }

  /**
   * Function used for simulator, actual implementation is in gatormoisture.cpp
   */
  //% shim=gatorMoisture::getMoisture
  function getMoisture(ADCVal: number) {
      // Fake function for simulator
      return 0
  }
}

