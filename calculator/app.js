class Calculator {
    constructor() {
        this.screenValue = '';
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
        this.awaitingSecondOperand = false;
    }

    appendNumber = (number) => {
        if (this.awaitingSecondOperand) {
            this.screenValue = number;
            this.awaitingSecondOperand = false;
        } else {
            this.screenValue += number;
        }
        this.updateScreen();
    };

    chooseOperator = (operator) => {
        if (this.screenValue === '') return;
        if (this.operator && this.awaitingSecondOperand) {
            this.operator = operator;
            return;
        }

        if (this.firstOperand === null) {
            this.firstOperand = parseFloat(this.screenValue);
        } else if (this.operator) {
            this.secondOperand = parseFloat(this.screenValue);
            const result = this.operate();
            this.screenValue = `${result}`;
            this.firstOperand = result;
        }

        this.operator = operator;
        this.awaitingSecondOperand = true;
        this.updateScreen();
    };

    calculate = () => {
        if (this.operator === null || this.screenValue === '') return;
        this.secondOperand = parseFloat(this.screenValue);
        const result = this.operate();
        this.screenValue = `${result}`;
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
        this.awaitingSecondOperand = false;
        this.updateScreen();
    };

    operate = () => {
        switch (this.operator) {
            case '+':
                return this.firstOperand + this.secondOperand;
            case '-':
                return this.firstOperand - this.secondOperand;
            case '*':
                return this.firstOperand * this.secondOperand;
            case '/':
                return this.secondOperand === 0 ? 'Error' : this.firstOperand / this.secondOperand;
        }
    };

    clear = () => {
        this.screenValue = '';
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
        this.awaitingSecondOperand = false;
        this.updateScreen();
    };

    updateScreen = () => {
        const screen = document.querySelector('.calculator-screen');
        screen.value = this.screenValue;
    };
}

const calculator = new Calculator();

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (!isNaN(value) || value === '.') {
            calculator.appendNumber(value);
        } else if (value === 'all-clear') {
            calculator.clear();
        } else if (value === '=') {
            calculator.calculate();
        } else {
            calculator.chooseOperator(value);
        }
    });
});
