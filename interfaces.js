var hilal = {
    dbId: 22,
    email: "h@h.com",
    id: 1,
    startTrial: function () {
        // return 3
        return "trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
hilal.email = "hilal@google.com";
// hilal.dbId = 33; // error, dbId is readonly
