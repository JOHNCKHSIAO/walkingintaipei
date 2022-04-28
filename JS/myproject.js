/*顯示隱藏的searchbar*/

(function(){
    let searchbarArea=document.querySelector("#searchbararea");
    let searchbarLi=document.querySelector("#searchbarid");
    searchbarLi.addEventListener("click",function(e){
        e.stopPropagation();
        searchbarArea.className="searchbar";
    })
    document.addEventListener("click",function(){
        searchbarArea.classList.add("hidesearchbar");
    })

})();

// /*顯示隱藏的searchbar結束*/


// /*這是back to top的程式碼*/

(function(){
    let gototopli=document.querySelector("#gototopli");
    window.addEventListener("scroll",hideOrAppear);
    gototopli.addEventListener("click",function(){
        // alert("test");
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    })

    function hideOrAppear(){
        
        if (document.documentElement.scrollTop > 1000){
            gototopli.style.display="block";
           
        }else{
            gototopli.style.display="none";
        } 
    }
})();

// /*back to top的程式碼結束*/


// /*--------------- 這是大圖輪播的程式碼--左右按鍵可控  下方原點可控   自動撥放----------*/

(function(){
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
        // console.log(`按右鍵之後的index=${index}`);
    });
    /* 點擊左邊按鈕會觸發showSlide函式 並且傳入參數(-1,0)*/
    turnleftbtn.addEventListener("click",function(){
        showSlide(-1,0);
        // console.log(`按左鍵之後的index=${index}`);
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
        slideimg[index].classList.add("on");
        dots[index].classList.add("doton");
        titles[index].classList.add("post");
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

})(); 

/* 這是大圖輪播的程式碼--左右按鍵可控  下方原點可控   自動撥放  ej/ 功能結束*/
        