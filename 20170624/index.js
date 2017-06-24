'use strict';

var Rx = require('../node_modules/rxjs');
var w3schools = "https://www.w3schools.com/js/js_array_methods.asp";
module.exports = () => {

    console.log(new Date());
    console.log("study start");

    // var arrayList = [1,2,3,4,5];
    // // read
    // read(arrayList);
    // console.log("=======================");
    // // push
    // arrayList.push(10);
    // arrayList.push(11);
    // arrayList.push(12);
    // console.log("=======================");
    // // read
    // read(arrayList);
    // console.log("=======================");
    // // current read
    // currentRead(arrayList, 0);
    
    // 구조 배열 
    var memberList = [];
    // 3명의 인원 
    registerMember(memberList, {
        name: '홍길동',
        phone: '01012341234'
    });
    registerMember(memberList, {
        name: '홍길순',
        phone: '01023452345'
    });
    registerMember(memberList, {
        name: '홍길자',
        phone: '01045674567'
    });

    var newMemberList = [];
    registerMember(newMemberList, {
        name: '김길동',
        phone: '01012341234'
    });
    registerMember(newMemberList, {
        name: '김길순',
        phone: '010-0000-1111'
    });
    registerMember(newMemberList, {
        name: '김길자',
        phone: '010-3333-4444'
    });
    console.log("string list", memberList.toString());
    console.log("string list", memberList.join("@"));
    console.log("string list", memberList.pop());
    console.log("string list", memberList.join("@"));
    console.log("string list", memberList.map(x=>x.name).join("@"));

    var subList = memberList.concat(newMemberList);
    listMember(subList);

    // var subList2 = memberList.concat(newListMember, ["dumymember", "dumymembre2"]);
    // listMember(subList2);

    listMember(subList.sort());
    console.log("---");
    listMember(subList.reverse());

    var numberList = [40, 100, 1, 5, 25, 10];
    console.log(numberList);
    console.log(numberList.sort());
    console.log(numberList.sort((a, b) => {
        return b - a;
    }));
    console.log(numberList.sort((a, b) => {
        return a - b;
    }));


    
    
}

function registerMember(list, item) {
    console.log("registerMember item => ", item);
    list.push(item);
    //listMember(list);
    newListMember(list);
}

function listMember(list) {
    for(var i=0; i<list.length; i++) {
        console.log(list[i]);
    }
}

function newListMember(list) {
    list.forEach(function(element) {
        console.log(element);
    }, this);
}

function fnListMember(list) {
    
}

function readMember(list, name) {
    var newItem = {};
    for(var i=0; i<list.length; i++) {
        if(list[i].name === name) {
            newItem = item;
        }
    }
    return newItem;
}

function removeMember(list, name) {
    for(var i=0; i<list.length; i++) {
        if(list[i].name === name) {
            list.splice(i, 1);
        }
    }
    return list;
}

function detailRead(arrayList, index) {
    var value = arrayList[index];
    console.log(value);
    return value;
}



var Rx = require('../node_modules/rxjs');
var RSVP = require('../node_modules/rsvp');
var w3schools = "https://www.w3schools.com/js/js_array_methods.asp";
module.exports = () => {

    // console.log(new Date());
    // console.log("study start");

    // // var arrayList = [1,2,3,4,5];
    // // // read
    // // read(arrayList);
    // // console.log("=======================");
    // // // push
    // // arrayList.push(10);
    // // arrayList.push(11);
    // // arrayList.push(12);
    // // console.log("=======================");
    // // // read
    // // read(arrayList);
    // // console.log("=======================");
    // // // current read
    // // currentRead(arrayList, 0);
    
    // // 구조 배열 
    // var memberList = [];
    // // 3명의 인원 
    // registerMember(memberList, {
    //     name: '홍길동',
    //     phone: '01012341234'
    // });
    // registerMember(memberList, {
    //     name: '홍길순',
    //     phone: '01023452345'
    // });
    // registerMember(memberList, {
    //     name: '홍길자',
    //     phone: '01045674567'
    // });

    // var newMemberList = [];
    // registerMember(newMemberList, {
    //     name: '김길동',
    //     phone: '01012341234'
    // });
    // registerMember(newMemberList, {
    //     name: '김길순',
    //     phone: '010-0000-1111'
    // });
    // registerMember(newMemberList, {
    //     name: '김길자',
    //     phone: '010-3333-4444'
    // });
    // console.log("string list", memberList.toString());
    // console.log("string list", memberList.join("@"));
    // console.log("string list", memberList.pop());
    // console.log("string list", memberList.join("@"));
    // console.log("string list", memberList.map(x=>x.name).join("@"));

    // var subList = memberList.concat(newMemberList);
    // listMember(subList);

    // // var subList2 = memberList.concat(newListMember, ["dumymember", "dumymembre2"]);
    // // listMember(subList2);

    // listMember(subList.sort());
    // console.log("---");
    // listMember(subList.reverse());

    // var numberList = [40, 100, 1, 5, 25, 10];
    // console.log(numberList);
    // console.log(numberList.sort());
    // console.log(numberList.sort((a, b) => {
    //     return b - a;
    // }));
    // console.log(numberList.sort((a, b) => {
    //     return a - b;
    // }));
}

function registerMember(list, item) {
    console.log("registerMember item => ", item);
    list.push(item);
    //listMember(list);
    newListMember(list);
}

function listMember(list) {
    for(var i=0; i<list.length; i++) {
        console.log(list[i]);
    }
}

function newListMember(list) {
    list.forEach(function(element) {
        console.log(element);
    }, this);
}

function fnListMember(list) {
    
}

function readMember(list, name) {
    var newItem = {};
    for(var i=0; i<list.length; i++) {
        if(list[i].name === name) {
            newItem = item;
        }
    }
    return newItem;
}

function removeMember(list, name) {
    for(var i=0; i<list.length; i++) {
        if(list[i].name === name) {
            list.splice(i, 1);
        }
    }
    return list;
}

function detailRead(arrayList, index) {
    var value = arrayList[index];
    console.log(value);
    return value;
}

class RxJS {
    constructor() {
        // this.forkjoin();
        this.oflist();
        var fnobj = this.fnObj();
        fnobj.subscribe(x => console.log(x));

        var list = [1,2,3,4];
        this.removeList(list, 1);
        var newlist = this.addList(list, 5);
        console.log(list);
        newlist.subscribe(x => console.log(x));

        this.editList(list,2,22);
        console.log(list);

    }
    forkjoin() {
        var source = Rx.Observable.forkJoin(
            Rx.Observable.of(42),
            Rx.Observable.range(0, 10),
            Rx.Observable.from([1,2,3]),
            RSVP.Promise.resolve(56)
        );

        var subscription = source.subscribe(
            x => { console.log('Next: ' + x); },
            err => { console.log('Error: ' + err); },
            () => { console.log('Completed'); });
    }
    fnObj () {
        return Rx.Observable.of('fnObj, hello');
    }

    addList (list, item) {
        list = list.concat(item);
        // list.push(item);
        return Rx.Observable.of(list);
    }

    removeList(list, idx) {
        list.splice(idx, 1);
        return list;
    }

    editList (list, idx, item)  {
        list[idx] = item;
    }

    oflist () {
        //Rx.Observable.of('hello rxjs').subscribe(x => { console.log(x); });
        var list = [];
        list.push({
            name: "k",
            phone: "1234",
            idx: 1234
        });
        Rx.Observable.of(list)
            .filter(x => x[0].idx > 1142)
            .map(x => x[0].name + "01")
            .subscribe(x => { console.log(x); });
        //Rx.Observable.of(1,2,3,4).subscribe(x =>{ console.log(x); });
    }
}

var rxjs = new RxJS();





