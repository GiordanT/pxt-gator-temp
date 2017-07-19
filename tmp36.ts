/**
* Mary West @ SparkFun Electronics
* June 30, 2017
* https://github.com/sparkfun/pxt-tmp36

* Development environment specifics:
* Written in Microsoft makecode
* Tested with a micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the tmp36
 */


//% color=#f44242 icon="\uf2ca" block = "tmp36"
namespace tmp36 {

   /**
    * Reads the value from the analog pin of the users choice
    *
    */
    //% weight=30 blockId="tmp26_temp(c)" block="temp(c) on pin %pin"
    export function tempC(pin:AnalogPin): number {
        let tc = 0
        tc=pins.analogReadPin(pin)
        return tc
    }

    /**
     * Function used for simulator, actual implementation is in tmp36.cpp
     */
    //% shim=tmp36::getTempC
    function getTempC(adcVal: number) {
        // Fake function for simulator
        return 0
    }

    /**
     * Function used for simulator, actual implementation is in tmp36.cpp
     */
    //% shim=tmp36::getTempF
    function getTempF(adcVal: number) {
        // Fake function for simulator
        return 0
    }
}
