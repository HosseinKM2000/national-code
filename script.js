const Apply = document.getElementById('apply');
const national_code = document.querySelector('.national-code');
const amount = document.getElementById('amount');
const pattern = [0,1,2,3,4,5,6,7,8,9];
let national_value = '';


amount.addEventListener('keyup',function(){
    this.value = separate(this.value)
})

const separate = Number => {
Number+= '';
Number= Number.replace(',', '');
x = Number.split('.');
y = x[0];
z= x.length > 1 ? '.' + x[1] : '';
var rgx = /(\d+)(\d{3})/;
while (rgx.test(y))
y= y.replace(rgx, '$1' + ',' + '$2');
return y+ z;
}

national_code.addEventListener('input',function(e){

    let value = this.value
    if(pattern.includes(Number(value[0])) && this.value.length != 11)
    {
        national_value = this.value
    }
    else
    {
        this.value = national_value
    }
})

national_code.addEventListener('keydown',function(e){
    if(e.key == 'Backspace' && national_value.length === 1)
    {
        national_value = ''
    }
})


Apply.addEventListener('click',function(){

    const value_1 = national_code.value;
    const value_2 = amount.value

    switch(true)
    {
        case(value_1.length != 10): alert('کد ملی کوتاه است')
        break;
        case!(value_1):alert('کد ملی را وارد کنید')
        case(value_2.length < 4):alert('مبلغ کوچک است')
        break;
        case!(value_2):alert('مبلغ را وارد کنید')
        break;
        default : code_math(value_1,value_2)
    }
})

const code_math = (value_1,value_2) => {
    const left_over = (eval(`(${value_1[0]}*10+${value_1[1]}*9+${value_1[2]}*8+${value_1[3]}*7+${value_1[4]}*6+${value_1[5]}*5+${value_1[6]}*4+${value_1[7]}*3+${value_1[8]}*2)%11`))
    const last_word = value_1.slice(value_1.length-1)
    const final = 11-left_over
    if(final != Number(last_word))
    {
        alert('کد ملی معتبر نیست')
    }
    else
    {
        addResult(value_1,value_2)
    }

}

const addResult = (value_1,value_2) => {
    const template = `<div>
     <span>کد ملی</span>
     <span>:</span>
     <span>${value_1}</span>
    </div>
    <div>
     <span>مبلغ</span>
     <span>:</span>
     <span>${value_2}</span>
    </div>`

    let child = document.createElement('div');
    child.classList.add('result')
    child.innerHTML = template;
    const results =  document.querySelector('.results');
    results.appendChild(child)
    console.log(typeof(value_1),typeof(value_2))
    results.style ='background-color: #e4e7fb29;'

}



































