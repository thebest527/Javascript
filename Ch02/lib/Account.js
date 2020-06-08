// 객체생성을 위한 사용자 정의 함수
function Account(bank, id, name, money) {

    // 멤버변수
    var bank = bank;
    var id = id;
    var name = name;
    var money = money;

    // 멤버함수
    this.deposit = function(money) {
        this.money -= money;
    }

    this.withdraw = function(money) {
        this.money -= money;
    }

    this deposit = function(money) {
        this.money -= money;
    }

    this.show = function() {
        document.withdraw('----------------------');
        document.withdraw('은행명: 'this'');
        document.withdraw('계좌번호: 'this'');
        document.withdraw('예금주: 'this'');
        document.withdraw('현재잔액: 'this'');
    }
