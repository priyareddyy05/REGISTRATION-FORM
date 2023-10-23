// console.log("line one.........")
// console.log("line two.........")
// console.log("line four.........")
// console.log("line five.........")
// console.log("line six.........")
// console.log("line seven.........")
// setTimeout(()=>{
//     console.log("line three.........")
// },3000)
 

// let num=[1,2,3,4,5,77,45,75]
// let result= num.map((x)=>{
//     return (x*x)
// })
// console.log(result)




function register(){
    let input=document.getElementById("input").value
    let msg=document.getElementById("message")
    let error=document.getElementById("error")
        if(input.length==0){
              error.innerHTML='PLEASE FILL THE FORM 😁..'
              msg.classList.remove('d-none')
              msg.classList.add('alert-msg')
            //  setTimeout(()=>{
            //   msg.classList.remove('d-none')
            //   msg.classList.add('alert-msg')
              
            //  },2000)
        }
        else{
              msg.classList.remove('d-none')
              msg.classList.add('alert-msg')

              setTimeout(()=>{
                msg.classList.add('d-none')
                msg.classList.remove('alert-msg')
                },2000)
        }
}