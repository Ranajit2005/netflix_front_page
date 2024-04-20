// console.log("Hi")
let ans = document.querySelectorAll(".answer")
// console.log(ans)
ans.forEach((ele,index)=>{
    ele.addEventListener("click",()=>{
        ele.nextElementSibling.classList.toggle("h-[auto]")
        ele.nextElementSibling.classList.toggle("scale-y-100")
        ele.nextElementSibling.classList.toggle("sm:p-5")
        ele.nextElementSibling.classList.toggle("p-3")
        ele.children[1].classList.toggle("rotate-45")

        ans.forEach((e,i)=>{
            if(i!=index){
                e.nextElementSibling.classList.remove("h-[auto]","scale-y-100","sm:p-5","p-3")
                e.children[1].classList.remove("rotate-45")
            }
        })
    })
})