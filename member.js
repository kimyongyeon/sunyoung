'use strict';

// 모델정의 프로그램 정의 : 입력 -> 처리 -> 출력 function Member() {     this.name = "";
// this.phone = "";     this.addr = ""; }

console.log = () => {};
// 오버라이드 


console.log = function() {};

class Member {

    constructor() {
        this.name = '';
        this.phone = '';
        this.addr = '';
        this.members = [];
    }


    // 데이터 베이스 
    searchList(_name) {
        // sql 언어 => like %김% 첫글자가 김으로 시작하는 이름을 찾아라
    }
    list() {
        this.print(this.members);
    }
    // 매개변수 = 인자 = 파라미터
    add(_member) {
        this
            .members
            .push(_member);
        this.print(this.members);
    }
    memberLoopSearch(_source, _target) {
        for(var i=0; i<this.members.length; i++) {
            switch (_source) {
                case "name":
                    if (this.members[i].name === _target) {
                        member = this.members[i];
                    }
                    break;               
                case "phone":
                    if (this.members[i].phone === _target) {
                        member = this.members[i];
                    }
                    break;
                default:
                    break;
            }
        }
    }
    /**
     * 폰검색 
     * @param {*} _phone 
     */
    detailSearchPhone (_phone) {
        var member = {};
        this.memberLoopSearch('phone', _phone);
        return member;
    }
    /**
     * 이름 검색 
     * @param {*} _name : 배열안에서 이름으로 찾기  
     */
    detailSearchName (_name) {
        var member = {};
        this.memberLoopSearch('name', _name);
        return member;
    }
    /**
     * 상세보기 
     * @param {*} _rowIdx : 배열 인덱스  
     */
    detail(_rowIdx) {
        var member = this.members[_rowIdx];
        this.print(member);
        return member;
    }
    /**
     * 삭제
     * @param {*} _rowIdx 
     */
    remove(_rowIdx) {
        this.members.splice(_rowIdx, 1);
        this.print(this.members);
    }
    /**
     * 1. rowIdx 받아서 해당 배열에서 row값을 찾아서 수정하는 방법
     * 2. rowIdx 값을 받아서 해당 row값을 삭제하고, push 하는 방법
     */
    
    edit(_rowIdx, _member) {
        // 1. 인덱스로 row찾아서 수정
        this.members[_rowIdx].name = _member.name;
        this.members[_rowIdx].phone = _member.phone;
        this.members[_rowIdx].addr = _member.addr;

        // 2. 삭제후 저장
        delete this.members[_rowIdx];
        this.members.push(_member);

        this.print(this.members);
    }
    // log 함수
    print(_str) {
        // 디버깅용
        console.log(new Date() + ": " + _str);
    }
}

window.onload = function () {
    var member = new Member();
    member.name = 'kimyongyeon';
    member.phone = '12313123';
    member.addr = '용산';
    member.add(member);
    member.edit(1, {
        name: 'suny',
        phone: '1234',
        addr: '서울'
    });
}
