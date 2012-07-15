var should = require('should');
var avg = require('../lib/average.js');

describe('threshold calculation', function () {
    it('should return 0 for identical numbers', function () {
        avg.difference(7, 7).should.equal(0);
    });

    it('should return 25% for the difference between 3 and 4', function () {
        avg.difference(3, 4).should.equal(0.25);
        avg.difference(4, 3).should.equal(0.25);
    });
});

describe('median filter', function () {
    it('should return single element array unfiltered', function () {
        var t = [ 42.78 ];
        avg(t).should.eql(t);
    });

    it('should apply window=3 by default', function () {
        var t = [ 2, 3, 4, 9, 6, 2 ];
        var f = [ 2, (2+3)/2, (2+3+4)/3, (3+4+9)/3, (4+9+6)/3, (9+6+2)/3 ];
        avg(t).should.eql(f);
    });

    it('should apply a 50% threshold', function () {
        var t = [ 2, 3, 4, 9, 6, 5 ];
        var f = [ 2, (2+3)/2, (2+3+4)/3, 9, (9+6)/2, (9+6+5)/3 ];
        avg(t, 3, 0.50).should.eql(f);
    });
});
