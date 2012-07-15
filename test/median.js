var should = require('should');
var mf = require('../lib/median.js');

describe('median filter', function () {
    it('should return single element array unfiltered', function () {
        var t = [ 42.78 ];
        mf(t).should.eql(t);
    });

    it('should return two element array unfiltered', function () {
        var t = [ 42.78, 93 ];
        mf(t).should.eql(t);
    });

    it('should apply window=3 by default', function () {
        var t = [ 2, 3, 4, 9, 6, 2 ];
        var f = [ 2, 3, 4, 6, 6, 2 ];
        mf(t).should.eql(f);
    });
});
