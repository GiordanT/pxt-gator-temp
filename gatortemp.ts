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

export enum GatorTempType{
	 F=1,
	 C=2,
	 adcVal=3,
 }



//% color=#f44242 icon="\u26C8"
namespace gatorTemp {

    // Functions for reading temperature from the gatortemp in degrees C or F

    /**
    * Reads the number
    */
    //% weight=30 blockId="gatorTemp_temp" block="Get Temperature on pin %pin | in %GatorTempType"
    export function temp(pin: AnalogPin, type: GatorTempType): number{
      let tempADCVal = pins.analogReadPin(pin)
      switch(type){
        case GatorTempType.F: return getDegF(tempADCVal)
        case GatorTempType.C: return getDegC(tempADCVal)
        case GatorTempType.adcVal: return tempADCVal
        default: return -11111111
      }
    }

	/**
     * Function used for simulator, actual implementation is in gatortemp.cpp
     */
    //% shim=gatorTemp::getDegF
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
