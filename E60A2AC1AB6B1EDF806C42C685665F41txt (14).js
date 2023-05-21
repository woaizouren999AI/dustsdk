var e, t = require("@babel/runtime/helpers/interopRequireDefault")(require("@babel/runtime/regenerator")), o = require("@babel/runtime/helpers/asyncToGenerator"), i = require("E18999D6AB6B1EDF87EFF1D17F865F41.js"), s = require("53405F52AB6B1EDF3526375596C65F41.js");

App({
    onLaunch: (e = o(t.default.mark(function e() {
        var o = this;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                i.updater(), wx.getSystemInfo({
                    success: function(e) {
                        console.log(e), "devtools" == e.platform && (o.NODE_ENV = "dev"), o.globalData.SDKVersion = e.SDKVersion, 
                        e.system && e.system.toLocaleLowerCase().match(/(windows)|(mac)|(linux)|(ubentu)|(centos)/) || i.compareVersion(e.SDKVersion, "2.13.2") < 0 && wx.showModal({
                            title: "微信版本过低",
                            content: "请将微信升级至8.0.9或以上版本",
                            showCancel: !1
                        }), o.globalData.windowWidth = e.windowWidth, o.globalData.windowHeight = e.windowHeight;
                    }
                });

              case 2:
              case "end":
                return e.stop();
            }
        }, e);
    })), function() {
        return e.apply(this, arguments);
    }),
    NODE_ENV: "pro",
    globalData: {
        SDKVersion: "",
        userInfo: null,
        hasUserInfo: !1,
        url: "https://app.zhifeishengwu.com/",
        header: {
            Cookie: ""
        },
        windowHeight: "",
        windowWidth: "",
        personPosition: "",
        questionnaireFlag: 0,
        subscribeInfo: {
            stime: "",
            etime: "",
            mxid: "",
            customerName: "",
            customerId: "",
            birthday: "",
            tel: "",
            cname: "",
            sex: "",
            idcard: "",
            pname: "",
            pid: "",
            FTime: "",
            subscribeTime: "",
            notice: ""
        },
        positionInfo: {
            status: -2
        }
    },
    dot: function() {
        s.info("dot"), s.setFilterMsg("dot");
    },
    jump: i.jump,
    getUserInfo: i.getUserInfo,
    callSubscribeMessage: i.callSubscribeMessage
});