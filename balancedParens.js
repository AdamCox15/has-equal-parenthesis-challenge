// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

//Figuring out wether a string has balanced parenthesis on each end 

// Write your solution below:
const hasBalancedParens = (string) => {
    let arr = string.split('')
    let parens = 0
    let close = 0
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === '(') {
        parens++
      } else if (arr[i] === ')') {
        close++
      }
    }
    if (parens !== close) {
      return false
    } else {
      return true
    }
  }
  
  console.log(hasBalancedParens('hello'))