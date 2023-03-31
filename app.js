 class calculator {
   constructor(previousOperandTextElement, currentOperandTextElement) {
     this.previousOperandTextElement = previousOperandTextElement;
     this.currentOperandTextElement = currentOperandTextElement;
     this.clear()
   }
   clear() {
     this.currentOperand = ''
     this.previousOperand = ''
     this.operation = undefined

   }
   delete() {
     this.currentOperand = this.currentOperand.toString().slice(0, -1)
   }
   appendnumber(number) {
     if (number === '.' && this.currentOperand.includes('.')) return
     this.currentOperand = this.currentOperand.toString() + number.toString()

   }
   chooseOperation(operation) {
     if (this.currentOperand === '') return
     if (this.previousOperand !== '') {
       this.compute()
     }
     this.operation = operation
     this.previousOperand = this.currentOperand
     this.currentOperand = ''

   }
   compute() {
     let computation
     const prev = parseFloat(this.previousOperand)
     const current = parseFloat(this.currentOperand)
     if (isNaN(prev) || isNaN(current)) return
     switch (this.operation) {
       case '+':
         computation = prev + current
         break
       case '-':
         computation = prev - current
         break
       case '*':
         computation = prev * current
         break
       case '÷':
         computation = prev / current
         break
       default:
         return
     }
     this.currentOperand = computation
     this.operation = undefined
     this.previousOperand = ''
   }

   updateDisplay() {
     this.currentOperandTextElement.innerText = this.currentOperand
     if (this.operation != null) {
       this.previousOperandTextElement.innerText =
         `${this.previousOperand} ${this.operation}`
     }

   }

 }
 const numberButtons = document.querySelectorAll('[data-number]')
 const operationButtons = document.querySelectorAll('[data-operation]')
 const equalsButton = document.querySelector('[data-equals]')
 const deleteButton = document.querySelector('[data-delete]')
 const allClearButton = document.querySelector('[data-all-clear]')
 const previousOperandTextElement = document.querySelector('[data-previous-operand]')
 const currentOperandTextElement = document.querySelector('[data-current-operand]')





 const calc = new calculator(previousOperandTextElement, currentOperandTextElement)
 numberButtons.forEach(button => {
   button.addEventListener('click', () => {
     calc.appendnumber(button.innerText)
     calc.updateDisplay()
   })
 })

 operationButtons.forEach(button => {
   button.addEventListener('click', () => {
     calc.chooseOperation(button.innerText)
     calc.updateDisplay()
   })
 })

 equalsButton.addEventListener('click', button => {
   calc.compute()
   calc.updateDisplay()
 })

 allClearButton.addEventListener('click', button => {
   calc.clear()
   calc.updateDisplay()
 })
 deleteButton.addEventListener('click', button => {
   calc.delete()
   calc.updateDisplay()
 })
 const back = document.querySelector('.body')
 var color = [, "#BB99FF", "#836BB3",
   "#EECCFF"
 ];
 back.addEventListener('mousemove', runevent)

 function runevent(e) {
   document.body.style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
 }