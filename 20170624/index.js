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



