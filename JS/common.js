/*顯示隱藏的searchbar*/

(function(){

    let searchbarArea=document.querySelector("#searchbararea");
    let searchbarLi=document.querySelector("#searchbarid");
    let hideSearchbar=function(){
        if(window.innerWidth>992){
            searchbarArea.classList.add("hidesearchbar");
        }
        
    }

    searchbarLi.addEventListener("click",function(e){
        e.stopPropagation();
        if(window.innerWidth>992){
            searchbarArea.classList.remove("hidesearchbar");
        }
        
    })
    document.addEventListener("click",hideSearchbar);

// /*顯示隱藏的searchbar結束*/


// /*這是back to top的程式碼  */

    let gototopdiv=document.querySelector("#gototop");
    /*判斷是否為手機版*/
    if(window.innerWidth<576){
        // gototopdiv.classList.remove("gototopdiv");
        // document.removeEventListener("click",hideSearchbar);  
    }
    /*監測scroll行為*/
    window.addEventListener("scroll",hideOrShow);
    gototopdiv.addEventListener("click",function(){
        // alert("test");
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    })
    
    function hideOrShow(){
        
        if(document.documentElement.scrollTop > 1000){
            gototopdiv.style.display="block";
        }else{
            gototopdiv.style.display="none";
        } 
    }
})();
    
// /*back to top的程式碼結束*/





/*點擊漢寶圖讓側邊欄跑出來*/
(function(){
    let hambergericon=document.querySelector(".hambergericon");
    // console.log(hambergericon);
    let nav_ol_mobile=document.querySelector("#nav_ol");
    // console.log(nav_ol_mobile);
    let mobile_closenav=document.querySelector("#mobile_closenav");
    hambergericon.addEventListener("click",function(){
        // nav_ol_mobile.classList.remove("nav-ol");
        nav_ol_mobile.classList.add("nav_ol_mobile");
        setTimeout(function(){
        nav_ol_mobile.classList.add("nav_ol_open");
        },0)
        
    })
    mobile_closenav.addEventListener("click",function(e){
        e.stopPropagation();
        nav_ol_mobile.classList.add("nav_ol_close");
        setTimeout(function(){
            nav_ol_mobile.classList.remove("nav_ol_mobile");
            nav_ol_mobile.classList.remove("nav_ol_open");
            nav_ol_mobile.classList.remove("nav_ol_close");
            },2000)
        
    })
})();        