
    let selectForm=document.querySelector("#mk22-time");
    let adultMinus=document.querySelector("#adult-number-minus-btn");
    let adultPlus=document.querySelector("#adult-number-plus-btn");
    let childMinus=document.querySelector("#child-number-minus-btn");
    let childPlus=document.querySelector("#child-number-plus-btn");
    let adultNumber=document.querySelector("#mk22-adult-number");
    let childNumber=document.querySelector("#mk22-child-number");
   
 
    let adultIndex=0;
    let childIndex=0;
    // let selectValue="";

    selectForm.addEventListener("change",function(e){
        e.preventDefault();
        selectValue=selectForm.value;
        console.log(selectValue);
    })

    adultPlus.addEventListener("click",function(){
        adultIndex+=1
        adultNumber.textContent=adultIndex;
    })
    

    // adultMinus.addEventListener("click",function(){
    //     if(selectValue==""){
    //         alert("請先選擇梯次!")
    //     }else{
    //         adultIndex-=1;
    //         if(adultIndex<=0){
    //             console.log(adultIndex);
    //             adultIndex=0;
    //             adultNumber.value=adultIndex;
    //         }
           
    //     }
    // })
 


    // childPlus.addEventListener("click",function(){
    //     childCal(1);
        
    // })
    // childMinus.addEventListener("click",function(){
    //    childCal(-1);
    // })
    
  
    

   
   
    // adultNumber.value=adultIndex;
    // childNumber.value=childIndex;
    // let sum=adultIndex*500+childIndex*300;
    // sumprice.textContent=sum;
      


    


function adultCal(arg){
    adultIndex+=arg;
}
function childCal(arg){
    childIndex+=arg
}

// console.log(adultIndex);
// console.log(childIndex);