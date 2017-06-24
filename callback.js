'use strict'

// 콜백 지옥
sync1 = function () {
    console.log(1);
}
sync2 = function () {
    console.log(2);
}
sync3 = function () {
    console.log(3);
}
sync1();
sync2();
sync3();

aync1 = function (_callback) {
    setTimeout(function () {
        _callback(1);
    }, 2000);
};
aync2 = function (_callback) {
    setTimeout(function () {
        _callback(2);
    }, 3000);
};
aync3 = function (_callback) {
    setTimeout(function () {
        _callback(3);
    }, 1000);
};
aync1(function(_data) {
    // 처리하고
    aync2(function(_data2){
        // 처리하고
        aync3(function(_data3) {
            // 처리하고 
        })
    })
});