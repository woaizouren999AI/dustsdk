var e = require("7CB37FA5AB6B1EDF1AD517A267E65F41.js"), t = require("9781E2F1AB6B1EDFF1E78AF68FE65F41.js");

module.exports = {
    callSubscribeMessage: function(e) {
        wx.requestSubscribeMessage({
            tmplIds: [ "DIUjDq2NazPRXTMsx_kEF0PiLB44w1l9r0cl6JkYYjQ" ],
            fail: function(e) {
                console.log(e);
            },
            complete: e
        });
    },
    getUserInfo: function(a, n) {
        var o = this;
        e.checkSessionId(function(s) {
            s ? e.getUserinfo(function(e) {
                200 == e.data.status ? (o.globalData.userInfo = e.data.user, o.globalData.userInfo.age = t.countAge(e.data.user.birthday), 
                a(o.globalData.userInfo)) : wx.showModal({
                    title: "完善信息",
                    content: "需填写个人信息，才能预约",
                    confirmText: "去填写",
                    success: function(e) {
                        e.confirm && wx.navigateTo({
                            url: "/packages/mine/profile/profile"
                        });
                    }
                });
            }, n) : e.getSessionId(function() {
                e.getUserinfo(function(e) {
                    200 == e.data.status ? (o.globalData.userInfo = e.data.user, o.globalData.userInfo.age = t.countAge(e.data.user.birthday), 
                    a(o.globalData.userInfo)) : wx.showModal({
                        title: "完善信息",
                        content: "需填写个人信息，才能预约",
                        confirmText: "去填写",
                        success: function(e) {
                            e.confirm && wx.navigateTo({
                                url: "/packages/mine/profile/profile"
                            });
                        }
                    });
                }, n);
            }, n);
        });
    },
    jump: function(e, t) {
        t ? wx.switchTab({
            url: e
        }) : wx.navigateTo({
            url: e
        });
    },
    compareVersion: function(e, t) {
        e = e.split("."), t = t.split(".");
        for (var a = Math.max(e.length, t.length); e.length < a; ) e.push("0");
        for (;t.length < a; ) t.push("0");
        for (var n = 0; n < a; n++) {
            var o = parseInt(e[n]), s = parseInt(t[n]);
            if (o > s) return 1;
            if (o < s) return -1;
        }
        return 0;
    },
    updater: function() {
        var e = wx.getUpdateManager();
        e.onCheckForUpdate(), e.onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                content: "已有新版本，需重启应用",
                showCancel: !1,
                success: function(t) {
                    e.applyUpdate();
                }
            });
        });
    }
};