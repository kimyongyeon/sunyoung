var Rx = require("./node_modules/rxjs");
var RSVP = require('./node_modules/rsvp');
var assert = require('assert');

// 입력
function RegisterMember(item, timer) {
    // 1. 값을 받는다. 
    // 2. 단일값만 받는다.또는 배열을 통으로 받는다. 
    // 3. 값을 메모리 디비에 저장하거나 mongodb에 저장한다.  
    // 4. 결과를 리턴한다. 
    return new Promise((resolve, reject) => {
        var name = "RegisterMember,kim";
        setTimeout(() => {
            var totalName = `[${timer}] => ${name} + ${item}`;
            resolve(totalName);
            ''
        }, timer);
    }); // RegisterMember.then('처리');

}

function RegisterMembers(arrayItem) {
    // 멀티값을 받아서 처리 
    return new Promise((resolve, reject) => {
        var name = "RegisterMembers,kim";
        setTimeout(() => {
            var totalName = `[${arrayCurrentValue}] => ${name}`;
            resolve(totalName);
        }, timer);
    });
}
// 수정
function EditMemer() {
    return new Promise((resolve, reject) => {
        var name = "EditMemer,kim";
        setTimeout(() => {
            var totalName = `[${arrayCurrentValue}] => ${name}`;
            resolve(totalName);
        }, timer);
    });
}
// 삭제
function DeleteMemer() {
    return new Promise((resolve, reject) => {
        var name = "DeleteMemer,kim";
        setTimeout(() => {
            var totalName = `[${arrayCurrentValue}] => ${name}`;
            resolve(totalName);
        }, timer);
    });
}
// 조회 
function SelectMemer() {
    return new Promise((resolve, reject) => {
        var name = "SelectMemer,kim";
        setTimeout(() => {
            var totalName = `[${arrayCurrentValue}] => ${name}`;
            resolve(totalName);
        }, timer);
    });
}

// var arrayListTiemr = [1,2,3,4,5,6,7,8,9];
// for(var i=0; i<3; i++) {
//     var timer = Math.floor(Math.random() * (arrayListTiemr.length-1) ) + 1;
//     var arrayCurrentValue = arrayListTiemr[timer] * 1000;
//     console.log("timer: ",timer);
//     var registerMember = new RegisterMember('yongyeon', arrayCurrentValue);
//     registerMember
//         .then(result => {
//             console.log(result);
//         })
//         .then(EditMemer).then(result => {console.log(result);})
//         .then(SelectMemer).then(result => {console.log(result);})
//         .then(DeleteMemer).then(result => {
//             console.log(result);
//         });
// }

// // 하나의 값 입력 
// arrayListTiemr.push(1);

// // 첫번째 인덱스 조회 
// arrayListTiemr[0];

// // 수정 
// arrayListTiemr[0] = 10;

// // 전체 길이
// arrayListTimer.length;

// // 삭제
// arrayListTiemr.splice(0, 1);


/* Using arguments */
var range = Rx.Observable.range(0, 5);

var source = Rx.Observable.zip(
    range,
    range.skip(1),
    range.skip(2),
    range.skip(1),
    function (s1, s2, s3, s4) {
        return s1 + ':' + s2 + ':' + s3 + ',' + s4;
    }
);

var source = Rx.Observable.range(0, 3)
    .flatMap(function (x) {
        return Promise.resolve(x * x);
    });

var subscription = source.subscribe(
    function (x) {
        console.log('onNext: %s', x);
    },
    function (e) {
        console.log('onError: %s', e);
    },
    function () {
        console.log('onCompleted');
    });

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

var promise1 = new RSVP.Promise(function (resolve, reject) {
    resolve(42);
});

assert.equal(true, true, 'message');

promise1.then((m) => console.log(m));
