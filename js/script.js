let items=document.querySelectorAll(".item-tabs");
let buttons=document.querySelectorAll(".best-deals__property-type");

document.addEventListener("click",function(e){
  let unactiveIndex;
  let activeIndex;
  if(e.target.closest('.best-deals__property-type')){
    buttons.forEach((button,index)=>{
      if(button.classList.contains("active")){
       unactiveIndex = index;
       button.classList.remove('active');
      }
      if(button==e.target){
       button.classList.add('active');
       activeIndex=index;
      }
    })
  }
    
    items[unactiveIndex].classList.remove('active');
    items[activeIndex].classList.add("active");
})