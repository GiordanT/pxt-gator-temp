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

 enum gatortempType{
	 F=1,
	 C=2,
	 adcVal=3,
 }



//% color=#f44242 icon="\u26C8"
namespace gatortemp {

    // Functions for reading temperature from the gatortemp in degrees C or F

    /**
    * Reads the number
    */
    //% weight=30 blockId="gatortemp_temp" block="Get Temperature on pin %pin | in %gatortempType"
    export function temp(pin: AnalogPin, type: gatortempType): number{
      let tempADCVal = pins.analogReadPin(pin)
      switch(type){
        case gatortempType.F: return getDegF(tempADCVal)
        case gatortempType.C: return getDegC(tempADCVal)
        case gatortempType.adcVal: return tempADCVal
        default: return -11111111
      }
    }

	/**
     * Function used for simulator, actual implementation is in gatortemp.cpp
     */
    //% shim=gatortemp::getDegF
    function getDegF(tempADCVal: number) {
        // Fake function for simulator
        return 0
    }

	/**
     * Function used for simulator, actual implementation is in gatortemp.cpp
     */
    //% shim=gatortemp::getDegC
    function getDegC(tempADCVal: number) {
        // Fake function for simulator
        return 0
    }

    }
