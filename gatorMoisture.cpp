
/**
* Mary West @ SparkFun Electronics
* Juuly 3, 2017
* https://github.com/sparkfun/pxt-gator-temp
*
* Development environment specifics:
* Written in Microsoft PXT
* Tested with a SparkFun MCP9700 sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/

#include "pxt.h"
#include <cstdint>
#include <math.h>

using namespace pxt;

namespace gatorMoisture {
    /*
    * Calculates the moisture based on the ADC value passed in. 1 step in adcVal is equal to .488 uA or .976 lux at 5V
    */
    //%
    uint16_t getMoisture(int16_t ADCVal) {
        return ADCVal * 1023.0;
    }

}

