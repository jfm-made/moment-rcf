/**
 * Created by julius on 25.02.17.
 */

let moment = require('moment');
let should = require('should');

require('../src/moment-rcf.js');

describe('Moment Round Ceil Floor', function() {
  describe('testing round() method', function() {
    it('rounding milliseconds', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(15, 'milliseconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:42.120');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(500, 'milliseconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:42.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(100, 'milliseconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:42.100');
    });

    it('rounding seconds', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(15, 'seconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:45.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(10, 'seconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:40.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(60, 'seconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:38:00.000');
    });

    it('rounding minutes', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(15, 'minutes').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:45:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(10, 'minutes').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:40:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(60, 'minutes').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 14:00:00.000');
    });

    it('rounding hours', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(5, 'hours').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 15:00:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(1, 'hours').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 14:00:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .round(10, 'hours').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 10:00:00.000');
    });
  });

  describe('testing ceil() method', function() {
    it('ceiling milliseconds', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(15, 'milliseconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:42.135');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(500, 'milliseconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:42.500');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(100, 'milliseconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:42.200');
    });

    it('ceiling seconds', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(15, 'seconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:45.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(5, 'seconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:45.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(60, 'seconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:38:00.000');
    });

    it('ceiling minutes', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(15, 'minutes').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:45:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(10, 'minutes').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:40:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(60, 'minutes').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 14:00:00.000');
    });

    it('ceiling hours', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(5, 'hours').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 15:00:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(1, 'hours').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 14:00:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .ceil(10, 'hours').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 20:00:00.000');
    });
  });

  describe('testing floor() method', function() {
    it('flooring milliseconds', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(15, 'milliseconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:42.120');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(500, 'milliseconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:42.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(100, 'milliseconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:42.100');
    });

    it('flooring seconds', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(15, 'seconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:30.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(5, 'seconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:40.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(60, 'seconds').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:37:00.000');
    });

    it('flooring minutes', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(15, 'minutes').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:30:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(10, 'minutes').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:30:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(60, 'minutes').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:00:00.000');
    });

    it('flooring hours', function() {
      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(5, 'hours').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 10:00:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(1, 'hours').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 13:00:00.000');

      moment('25.02.2017 13:37:42.123', 'DD.MM.YYYY HH:mm:ss.SSS')
        .floor(10, 'hours').format('DD.MM.YYYY HH:mm:ss.SSS')
        .should.equal('25.02.2017 10:00:00.000');
    });
  });

});