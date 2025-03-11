function arrayCalc(num1, num2, num3) {
    var arr = [num1, num2, num3]
    var results = []
    var sum = arr[0]
    var mul = arr[0]
    var divide = arr[0]
    for (var x = 1; x < arr.length; x++) {
        sum += arr[x]
        mul *= arr[x]
        if (arr[x] === 0) divide = "Math Error; Can't divide on 0";
        else divide /= arr[x];
    }
    results = [sum, mul, divide]
    return results
}
var num1 = prompt("please enter first number: ")
var num2 = prompt("please enter second number: ")
var num3 = prompt("please enter third number: ")
var resultsArray = arrayCalc(Number(num1), Number(num2), Number(num3))
document.writeln('<h3 style="color: red;">Sum of the 3 values is ' + num1 + ' + ' + num2 + ' + ' + num3 + ' = ' + '<span style="color: black !important;">' + resultsArray[0] + '</span>' + '</h3>')
document.writeln('<h3 style="color: red;">Multiplication of the 3 values is ' + num1 + ' * ' + num2 + ' * ' + num3 + ' = ' + '<span style="color: black !important;">' + resultsArray[1] + '</span>' + '</h3>')
document.writeln('<h3 style="color: red;">Division of the 3 values is ' + num1 + ' / ' + num2 + ' / ' + num3 + ' = ' + '<span style="color: black !important;">' + resultsArray[2] + '</span>' + '</h3>')
