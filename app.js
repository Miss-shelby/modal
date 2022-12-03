//  let items = document.getElementsByClassName("list-items")
//  console.log(items)
//  items[1].textContent= "hello "
//  items[1].style.color="red"

// //  items.style.backgroundColor="grey"
//  for(let i =0; i < items.length; i++){
//     items[i].style.backgroundColor="grey"
//  }

 //get elements by tag name
//  let li = document.getElementsByTagName("li")
//  console.log(li)

//  for(let i = 0;i < li.length;i++){
//     li[i].style.color="red"
//  }
//  //query selector
//  console.log(itemList.children)


let hexCard= document.getElementById("hex-card")
let color = document.getElementById("color")
let colorGenerator= document.getElementById("btn-generator")

colorGenerator.addEventListener("click", function generateHexColor() {
  let randomColor = Math.random().toString(16).substring(2,8)
  console.log(randomColor)
  hexCard.style.backgroundColor="#" + randomColor
  color.innerHTML="#" + randomColor
  
})