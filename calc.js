'use strict';
// 4칙연산 계산기
// +/-/*/%
// 두수를 받아서 계산하는 클래스를 작성하시오.
class Calc {
    constructor(_num1, _num2) {
        this.num1 = _num1; // 맴버변수에 넣는다. 
        this.num2 = _num2;
        //this.sum = 0;
        //this.sum = _num1 + _num2; // 덧셈
    }
    getSum () {
        return this.sum();
    }
    sum () {
        // 핵심 알고리즘
        var sum = this.num1 + this.num2;
        return this.sum;
    }
}

var calc = new Calc(1, 2);
calc.sum(); // 3
// 4, 5
this.num1 = 3;
this.num2 = 4;
//this.sum = 10;
calc.sum();
var sum2 = calc.getSum();

calc.minus(); // -1
calc.gob(); // 2
calc.nunum(); // 0.5

function sum(x, y) {

}

function minus(x, y) {

}

sum(1,2);
minus(1, 3);