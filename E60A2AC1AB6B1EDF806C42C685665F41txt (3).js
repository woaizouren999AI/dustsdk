var e, n = require("785E7736AB6B1EDF1E381F31B1A65F41.js"), i = require("615351A3AB6B1EDF073539A41F665F41.js");

null == e && (e = new i({
    key: n.qqmapkey
}));

var o = function(n, i) {
    return new Promise(function(o, t) {
        e.reverseGeocoder({
            location: {
                latitude: n,
                longitude: i
            },
            success: function(e) {
                e.latitude = n, e.longitude = i, o(e);
            },
            fail: function(e) {
                t(e);
            }
        });
    });
};

module.exports = {
    ReverseGeocoder: function(e, n) {
        return new Promise(function(i, t) {
            o(e, n).then(function(e) {
                i(e);
            }, function(e) {
                t(e);
            });
        });
    }
};