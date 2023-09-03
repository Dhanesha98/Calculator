var _number01, _number02, _answer , _operator;

function setScreen(num)
{
   
    if(document.getElementById('txtscreen').value != "0")
    {
        document.getElementById('txtscreen').value = num;
    }
    else{
        document.getElementById('txtscreen').value= num;
    }
    console.log("setScreen called with: " + num);
}

function reset(){
    document.getElementById('txtscreen').value = "";
}
function setOperator(op) {
    _operator = op;
    _number01 = document.getElementById('txtscreen').value;
    _number02 = document.getElementById('txtscreen').value;
    document.getElementById('txtscreen').value +=op;
    console.log("_number01:" + _number01);
    console.log("_number02:" + _number02);
}



function calculate() {
    _number02 = document.getElementById('txtscreen').value;
    
    switch (_operator) {
        case '+':
            _answer = parseFloat(_number01) + parseFloat(_number02);
            break;
        case '-':
            _answer = parseFloat(_number01) - parseFloat(_number02);
            break;
        case '*':
            _answer = parseFloat(_number01) * parseFloat(_number02);
            break;
        case '/':
            _answer = parseFloat(_number01) / parseFloat(_number02);
            break;
    }
    
    document.getElementById('txtscreen').value = _answer.toFixed(2); // Rounds to 2 decimal places

}

