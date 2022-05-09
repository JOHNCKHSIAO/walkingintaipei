// /*--------------- 這是大圖輪播的程式碼--左右按鍵可控  下方原點可控   自動撥放----------*/
export function controlSlide(){
    let turnleftbtn=document.querySelector("#leftbtn");
    let turnrightbtn=document.querySelector("#rightbtn");
    let dots=document.querySelectorAll(".dot");
    let slideimg=document.querySelectorAll(".slideimg");
    let titles=document.querySelectorAll(".slidetitle");
    let index=0;
    /* 預設讓他先自動輪播*/
        window.setInterval(autoPlaySlide,4000);
    /* 點擊右邊按鈕會觸發showSlide函式 並且傳入參數(1,0)*/
    turnrightbtn.addEventListener("click",function(){
        showSlide(1,0);
       
    });
    /* 點擊左邊按鈕會觸發showSlide函式 並且傳入參數(-1,0)*/
    turnleftbtn.addEventListener("click",function(){
        showSlide(-1,0);
       
    });
    /*把下方的點點輪流綁定-每一個點點都會觸發showSlide函式 並且傳入(0,自己的位置)*/
    for(let i=0;i<dots.length;i++){
        dots[i].addEventListener("click",function(){
            showSlide(0,i);
        })
    }



    /*啟動大圖輪播 設計兩個參數  arg1是給左右按鍵操控的 arg2是給下方點點操控的*/
     
    function showSlide(arg1,arg2){
        arg1===0? index=arg2 : index=index+arg1;
        /* 判斷 如果arg1等於0 (就是按點點操控的狀況) 則index指向arg2的值
        如果arg1 不等於0  (就是按左右按鈕操控的狀況  arg1 只會是0跟-1) 那麼index 會等於arg1+index
        */
      
        /*先把預設的狀態都拿掉*/
        for(let i=0;i<slideimg.length;i++){
            slideimg[i].classList.remove("on")
        };
        for(let i=0;i<dots.length;i++){
            dots[i].classList.remove("doton")
        };
        for(let i=0;i<titles.length;i++){
            titles[i].classList.remove("post")
        };

        /* 如果index累加超過4 就把index重新指定給0 這樣按右鍵按過頭就可以跑出最後一張*/
        if(index>slideimg.length-1){
            index=0;
        };

        /* 如果inde<0 就把index重新指定給4 這樣一開始按左鍵就可以跑出最後一張*/
        if(index<0){
            index=4;
        };
        titles[index].classList.add("post");
        slideimg[index].classList.add("on");
        dots[index].classList.add("doton");
        
    }

    /*自動跑的slide函式*/
    function autoPlaySlide(){
        /*先把預設的狀態都拿掉*/
       
        for(let i=0;i<slideimg.length;i++){
            slideimg[i].classList.remove("on")
            
        };
        for(let i=0;i<dots.length;i++){
            dots[i].classList.remove("doton")
        };
        for(let i=0;i<titles.length;i++){
            titles[i].classList.remove("post")
        };

        /*index0-4都採用以下設定*/
        if(index<slideimg.length){
            
            slideimg[index].classList.add("on");
            dots[index].classList.add("doton");
            titles[index].classList.add("post");
        }else{
        /*經過++大於4之後 重新把index指向0*/
            index=0;
            slideimg[index].classList.add("on");
            dots[index].classList.add("doton");
            titles[index].classList.add("post");
        
        }
        index++;
      
    }

};

/* 這是大圖輪播的程式碼--左右按鍵可控  下方原點可控   自動撥放  ej/ 功能結束*/


/* 這是走走小記的側邊選單功能*/
export function blogListFilter(){
    let bloglist_ol=document.querySelector(".bloglist-ol");
    let travel_note_aside=document.querySelector("#travel_note");
    let culture_atricle_aside=document.querySelector("#culture_atricle");
    let travelnoteClass=document.querySelectorAll(".travel-note");
    let cultureClass=document.querySelectorAll(".culture");

    travel_note_aside.addEventListener("click",function(e){
        e.preventDefault();
      
        travelnoteClass.forEach(function(item,i){
            item.className="";
            item.classList.add("displayBlock");
        })
        cultureClass.forEach(function(item,i){
            item.className="";
            item.classList.add("displayNone")
        })

    });
    culture_atricle_aside.addEventListener("click",function(e){
        e.preventDefault();
      
        cultureClass.forEach(function(item,i){
            item.className="";
            item.classList.add("displayBlock");
        })
        travelnoteClass.forEach(function(item,i){
            item.className="";
            item.classList.add("displayNone")
        })
        
    })
   
}

/*這是複製網址的功能*/
export function copyURL(){
    let copyURL_img=document.querySelector("#copyURL_img");
    copyURL_img.addEventListener("click",function(){
        let url=window.location.href;
        document.execCommand('copy');

    })
}