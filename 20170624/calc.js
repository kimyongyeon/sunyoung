'use strict';

class Calc {
    constructor(_num1, _num2){
        this.num1 = _num1;
        this.num2 = _num2;
        this.sum = 0; // 초기화
        
    }

    sum(){
        this.sum = this.num1 + this.num2;
        return this.sum;
    }
    minus(){
        this.sum = this.num1 - this.num2;
        return this.minus;
    }
     gob(){
        this.sum = this.num1 * this.num2;
        return this.gob;
    }
     nanum(){
        this.sum = this.num1 / this.num2;
        return this.nanum;
    }
}

var calc = new Calc(1,2); // 인스턴스 생성
calc.sum();
calc.minus();
calc.gob();
calc.nanum();