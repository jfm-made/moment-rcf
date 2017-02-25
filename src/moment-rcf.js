/**
 * @Author: Julius F. Martin
 * @Date: 25. Feb. 2017
 *
 * Adding the methods round(), ceil(), floor() to moment
 *
 * Example usage:
 *  moment().round(15, "minutes", true)
 *  round to nearest 15 minutes and sets all lower units (in this case "seconds"
 *  and "milliseconds" to zero.
 */

'use strict';

(function () {
  function onload(moment) {
    /**
     * Rounds a specified unit of the moment object depending on a given
     * number. Optionally sets all lower units to zero
     *
     * @param quantityInteger - numerical value to round to
     * @param unitString - moment unit out of ["hour","minute","second",
     *        "millisecond","hours","minutes","seconds","milliseconds"]
     * @returns {*} manipulated moment object
     */
    moment.fn.round = function (quantityInteger, unitString) {
      return jfm_moment_rcf(this, quantityInteger, unitString, 'round');
    };

    /**
    * Rounds up a specified unit of the moment object depending on a given
    * number. Optionally sets all lower units to zero
    *
    * @param quantityInteger - numerical value to round to
    * @param unitString - moment unit out of ["hour","minute","second",
    *        "millisecond","hours","minutes","seconds","milliseconds"]
    * @returns {*} manipulated moment object
    */
    moment.fn.ceil = function (quantityInteger, unitString) {
      return jfm_moment_rcf(this, quantityInteger, unitString, 'ceil');
    };

    /**
    * Rounds down a specified unit of the moment object depending on a given
    * number. Optionally sets all lower units to zero
    *
    * @param quantityInteger - numerical value to round to
    * @param unitString - moment unit out of ["hour","minute","second",
    *        "millisecond","hours","minutes","seconds","milliseconds"]
    * @returns {*} manipulated moment object
    */
    moment.fn.floor = function (quantityInteger, unitString) {
        return jfm_moment_rcf(this, quantityInteger, unitString, 'floor');

    };
  }

  /**
   *
   * @param moment - moment object to manipulate
   * @param quantityInteger - numerical value to round to
   * @param unitString - moment unit out of ["hour","minute","second",
   *        "millisecond","hours","minutes","seconds","milliseconds"]
   * @param methodString - which method to use out of ["round","ceil","floor"]
   */
  function jfm_moment_rcf(moment, quantityInteger, unitString, methodString) {
    var unitStrings = ['hour','minute','second','millisecond'];
    var methods = ['round','ceil','floor'];
    var boundaries = {
        'hour': {
            upper: 24,
            lower: 1,
            ms: 3600000
        },
        'minute': {
            upper: 60,
            lower: 1,
            ms: 60000
        },
        'second': {
            upper: 60,
            lower: 1,
            ms: 1000
        },
        'millisecond': {
            upper: 1000,
            lower: 1,
            ms: 1
        }
    };

    var quantity = parseInt(quantityInteger);
    var unit = unitStrings[0];
    var method = methods[0];

    quantity = (isNaN(quantity) ? 0 : quantity);
    unitString = (unitString ? unitString.toString() : unitStrings[0]);
    unitString = (unitString[unitString.length-1] == 's' ? unitString.slice(0,-1) : unitString).toLowerCase();

    for(var i=0;i<unitStrings.length;i++) {
      if(unitStrings[i] === unitString) {
        unit = unitStrings[i];
        break;
      }
    }

    if(quantity == 0) {
      quantity = boundaries[unit].upper;
    }
    if(quantity < boundaries[unit].lower) {
      quantity = Math.abs(quantity)
    }
    if(quantity > boundaries[unit].upper) {
      quantity %= boundaries[unit].upper;
    }

    for(var i=0;i<methods.length;i++) {
      if(methods[i] === methodString) {
        method = methods[i];
      }
    }

    var ms = 0;
    for(var i=unitStrings.indexOf(unit);i<unitStrings.length;i++) {
      ms += moment.get(unitStrings[i]) * boundaries[unitStrings[i]].ms;
    }
    var unitFloat = ms/boundaries[unit].ms;

    for(var i=unitStrings.indexOf(unit)+1;i<unitStrings.length;i++) {
      moment.set(unitStrings[i],0);
    }

    return moment.set(unit,Math[method](unitFloat/quantity)*quantity)
  }

  if (typeof define === 'function' && define.amd) {
    define('moment-rcf', ['moment'], onload);
  } else if (typeof module !== 'undefined') {
    module.exports = onload(require('moment'));
  } else if (typeof window !== 'undefined' && window.moment) {
    onload(window.moment);
  }

}).apply(this);