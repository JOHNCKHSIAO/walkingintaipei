/*表單操作 宣告操作的物件*/
    let selectForm=document.querySelector("#mk22-time");
    let adultMinus=document.querySelector("#adult-number-minus-btn");
    let adultPlus=document.querySelector("#adult-number-plus-btn");
    let childMinus=document.querySelector("#child-number-minus-btn");
    let childPlus=document.querySelector("#child-number-plus-btn");
    let select_alert=document.querySelector(".select-alert");
    let next_step_alert=document.querySelector(".next_step_alert");
    let adultNumber=document.querySelector("#mk22-adult-number");
    let childNumber=document.querySelector("#mk22-child-number");
    let next_step=document.querySelector(".next_step");
    let adultIndex=0;
    let childIndex=0;
    let selectValue="";
    let totalPrice=document.querySelector("#totalprice");
    let totalNumofPeople=0;
    let info=document.getElementById("info");
    let info_other=document.getElementById("info_other");
    let infomajor=document.querySelector(".info_major");
    let diet_habit=document.querySelector(".diet-habit");
    let veginput=document.querySelector("#mk22_diet_habit_veg");
    let meatinput=document.querySelector("#mk22_diet_habit_meat");
    let textarea=document.querySelector(".textarea");
    let nextOrLast=document.querySelector(".nextOrLast");
    let buy=document.querySelector("#buy");
    let laststep=document.querySelector("#laststep");

 /*先宣告點擊行為的匿名函式 後續才可以移除監聽*/

    let  clickandAddAdult=function(){
        selectValue==""?  alertselect(1) : adultCal(1); //先判斷有無選取梯次
        adultNumber.textContent=adultIndex;
        totalPrice.textContent=`TWD${childIndex*300+adultIndex*500}元`;
        next_step_alert.style.opacity=0;
    }
    let  clickandMinusAdult=function(){
        selectValue==""?  alertselect(1) : adultCal(-1);
        adultNumber.textContent=adultIndex;
        totalPrice.textContent=`TWD${childIndex*300+adultIndex*500}元`;
        next_step_alert.style.opacity=0;
    }
    let  clickandAddChild=function(){
        selectValue==""?  alertselect(1) : childCal(1);
        childNumber.textContent=childIndex;
        totalPrice.textContent=`TWD${childIndex*300+adultIndex*500}元`;
        next_step_alert.style.opacity=0;
    }
    let  clickandMinusChild=function(){
        selectValue==""?  alertselect(1) : childCal(-1);
        childNumber.textContent=childIndex;
        totalPrice.textContent=`TWD${childIndex*300+adultIndex*500}元`;
        next_step_alert.style.opacity=0;
    }
    let next_stepFn=function(e){
        //先判斷有無選取人數
        e.preventDefault();
        if(window.innerWidth<=576 && (childIndex==0 && adultIndex==0)){
            alert("請先選擇人數")
        }else if( childIndex==0 && adultIndex==0 ){
            next_step_alert.style.opacity=100;
        }else{
            console.log("click");
            totalNumofPeople= childIndex+adultIndex;
            info.classList.add("display_block");
            createNewInput(totalNumofPeople);
            diet_habit.classList.add("display_block");
            textarea.classList.add("display_block");
            nextOrLast.classList.add("display_flex_jtify_sa");
            selectForm.disabled="disabled";
            adultPlus.removeEventListener("click",clickandAddAdult);
            adultMinus.removeEventListener("click",clickandMinusAdult);
            childPlus.removeEventListener("click",clickandAddChild);
            childMinus.removeEventListener("click",clickandMinusChild);
            next_step.removeEventListener("click",next_stepFn); //避免重複點擊
        }   
    }

/*先選擇梯次*/

    selectForm.addEventListener("change",function(){
        selectValue=selectForm.value;
        childNumber.textContent=0;
        adultNumber.textContent=0;
        alertselect(0); //如果選擇了梯次  警告就消除
    })

/*先選擇梯次 才可以點擊人數*/

    adultPlus.addEventListener("click",clickandAddAdult); 
    adultMinus.addEventListener("click",clickandMinusAdult); 
    childPlus.addEventListener("click",clickandAddChild);
    childMinus.addEventListener("click",clickandMinusChild);

/*按下下一步的操作*/

next_step.addEventListener("click",next_stepFn);

veginput.addEventListener("change",function(){
    diet_confirm.style.opacity="0";

})
meatinput.addEventListener("change",function(){
    diet_confirm.style.opacity="0";
})

/*購買按鍵*/
buy.addEventListener("click",function(e){
    // e.preventDefault();
    checkDietValue();

})

/*回到上一步(重新整理)*/
laststep.addEventListener("click",function(){
    let redirect=document.querySelector(".navigation>a[href='./shooping.html']")
    redirect.click();
})

   
/*大人或小孩人數計算*/
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

/*先選梯次 否則警告*/
function alertselect(arg){
    if (window.innerWidth<=576 && arg==1){
            alert("請先選擇梯次");
    }else{
        if (arg==1){
            select_alert.style.opacity="100";
        }else{
            select_alert.style.opacity="0";
        }
    }
   
}

/*新增貼文*/
function createNewInput(num){
    console.log(info);
    for(let i=num-1;i>=1;i--){
        let info_Content=`
            <div class="info_other_child">
                <h2>成員${i}</h2>
                <div>
                    <label for="mk22_other_name_${i}">姓名</label>
                    <input type="text" name="mk22_other_name_${i}" id="mk22_other_name_${i}" required minlength="2">
                </div>
                <div>
                    <label for="other_id_${i}">身分證字號</label>     
                    <input type="password" name="other_id_${i}" placeholder="請輸入身分證字號"id="other_id_${i}" required minlength="10" pattern="^[A-Z]{1}[1-2]{1}[0-9]{8}$" >
                </div>
            </div>`;
        info_other.insertAdjacentHTML("afterbegin",info_Content);
    }
}
/*檢查餐點人數是否跟參加人數相同*/
function checkDietValue(){
    let info_other=document.querySelectorAll(".info_other");
    let diet_confirm=document.querySelector("#diet_confirm");
    let vegNum=Number(veginput.value);
    let meatNum=Number(meatinput.value); 

    if (info_other.length!=vegNum+meatNum){
        diet_confirm.style.opacity="100";
    }
    
}
