/**
* Mary West @ SparkFun Electronics 
* July 3, 2017
* https://github.com/sparkfun/pxt-tmp36

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun TMP36 sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions 
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the TMP36 sensor
 */

enum tmp36Type {
    //% blockId="f" block="Degrees in F"
    FARENHEIT = 1,
    //% blockId="c" block="Degrees in C"
    CELSIUS = 2,
    //% blockId="adc" block="Raw ADC value"
    RAW_ADC = 3,
}

//% color=#f44242 icon="\u26C8"
namespace tmp36 {

    // Functions for reading temperature from the TMP36 in degrees C or F

    /**
    * Reads the number 
    */
    //% weight=30 blockId="tmp36_temp" block="Get Temperature on pin %pin | in %tmp36type"
    export function temp(pin: AnalogPin, tmp36type: tmp36Type): number {
        let tempADCVal = pins.analogReadPin(pin)
        switch (tmp36type) {
            case tmp36Type.FARENHEIT: return getDegF(tempADCVal)
            case tmp36Type.CELSIUS: return getDegC(tempADCVal)
            case tmp36Type.RAW_ADC: return tempADCVal
            default: return -111111111
        }
    }

	/**
     * Function used for simulator, actual implementation is in tmp36.cpp
     */
    //% shim=tmp36::getDegF
    function getDegF(tempADCVal: number) {
        // Fake function for simulator
        return 0
    }

	/**
     * Function used for simulator, actual implementation is in tmp36.cpp
     */
    //% shim=tmp36::getDegC
    function getDegC(tempADCVal: number) {
        // Fake function for simulator
        return 0
    }

}
