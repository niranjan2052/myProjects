console.log('Connected')


    const Button = document.querySelector('.Button');
    const result = document.querySelector('.FinalAmt');


Button.addEventListener('click', calculate);

function balance(P,Y,R,C){
    let firstPrinciple =  P * Math.pow((1 + R / 100), Y);
    let secondPrinciple = C*(((Math.pow(1+R),Y)-1)/R);
    return firstPrinciple+secondPrinciple;
}

function calculate(){

        var Amt = document.getElementById('Amount').value;
        var addAmt = document.getElementById('addAmt').value;
        var rate = document.getElementById('Rate').value;
        var compoundingTime = document.getElementById('comp').value;
        var time = document.getElementById('time').value;
        var futureValue;
        if(compoundingTime === 'Annual'){
            futureValue = balance(Amt,time,rate,addAmt);
            console.log(futureValue)
        }else if(compoundingTime === 'Semi-Annual'){
            rate = rate/2;
            time = time*2;
            futureValue = balance(Amt,time,rate,addAmt);
            console.log(futureValue)
        }else if(compoundingTime === "Quarterly"){
            rate = rate/4;
            time = time*4;
            futureValue = balance(Amt,time,rate,addAmt);
            console.log(futureValue)
        }else if(compoundingTime === "Monthly"){
            rate = rate/12;
            time = time*12;
            futureValue = balance(Amt,time,rate,addAmt);
            console.log(futureValue)
        }else{
            alert("Wrong Input")
        }
        try{
            nfObject = new Intl.NumberFormat('en-us'); //Adding comma to number
            result.innerHTML = nfObject.format(futureValue.toFixed(2));
        }catch(e){
            console.log('ERROR!!')
        }
        
}

window.addEventListener('keypress',key=>{
    if(key.keyCode===13){
        calculate()
    }
});