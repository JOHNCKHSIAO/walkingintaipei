
    let selectForm=document.querySelector("#mk22-time");
    let adultMinus=document.querySelector("#adult-number-minus-btn");
    let adultPlus=document.querySelector("#adult-number-plus-btn");
    let childMinus=document.querySelector("#child-number-minus-btn");
    let childPlus=document.querySelector("#child-number-plus-btn");
    let adultNumber=document.querySelector("#mk22-adult-number");
    let childNumber=document.querySelector("#mk22-child-number");
    let next_step=document.querySelector(".next_step");
    let adultIndex=0;
    let childIndex=0;
    let selectValue="";
    let totalPrice=document.querySelector("#totalprice");

    selectForm.addEventListener("change",function(){
        selectValue=selectForm.value;
        console.log(selectValue);
    })

    adultPlus.addEventListener("click",function(e){
        e.preventDefault();
        selectValue==""?  alert("請先選擇梯次!") :adultCal(1);
        adultNumber.textContent=adultIndex;
        totalPrice.textContent=`TWD${childIndex*300+adultIndex*500}元`;
    })
    
    adultMinus.addEventListener("click",function(e){
        e.preventDefault();
        selectValue==""?  alert("請先選擇梯次!") :adultCal(-1);
        adultNumber.textContent=adultIndex;
        totalPrice.textContent=`TWD${childIndex*300+adultIndex*500}元`;
    })
 
    childPlus.addEventListener("click",function(e){
        e.preventDefault();
        selectValue==""?  alert("請先選擇梯次!") :childCal(1);
        
        childNumber.textContent=childIndex;
        totalPrice.textContent=`TWD${childIndex*300+adultIndex*500}元`;
        
    })
    childMinus.addEventListener("click",function(e){
        e.preventDefault();
        selectValue==""?  alert("請先選擇梯次!") :childCal(-1);
        console.log(childIndex);
        childNumber.textContent=childIndex;
        totalPrice.textContent=`TWD${childIndex*300+adultIndex*500}元`;
    })

    next_step.addEventListener("click",function(){
        (childIndex==0 && adultIndex==0 )? alert("請先確認人數"): nextStep();
    })

function nextStep(){
    let numOfInput= childIndex+adultIndex
    
}



function adultCal(arg){
    adultIndex+=arg;
    if (adultIndex<=0){
        adultIndex=0;
    }
}
function childCal(arg){
    childIndex+=arg;
    if (childIndex<=0){
        childIndex=0;
    }
}