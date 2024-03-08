// function validatation(){
//     var name = document.querySelector(".name").value;
//     var Age = document.querySelector(".age").value;
//     var Address = document.querySelector(".address").value;
//     var Email = document.querySelector(".email").value;
//     if(name ==""){
//         alert("Name is required")
//         return false;
//     }else if(Age  < 1){
//        alert(" Age must not be zero or less than one")
//        return false;
//     }else if(Address ==""){
//      alert("adrees is required")
//     }else if(Email ==""){
//         alert("email is required")
//     }else if(!Email.includes("@")){
//         alert("invalid email")
//     }
//     return true;
// }
//  function showData(){
//     var peopleList;
//     if(localStorage.getItem("peopleList")==null){
//         peopleList =[];
//     }else{
//       peopleList.JSON.purse(localStorage.getItem("peoplelist"))
//     }
//     var html="";
//     peopleList.forEach(function(element,index){
//         html+="<tr>";
//         html+="<td>" + element.name + "<td>";
//         html+="<td>" + element.Age + "<td>";
//         html+="<td>" + element.Address + "<td>";
//         html+="<td>" + element.Email + "<td>";
//         html+=`<td><button onclick="deleteData('+index+')" 
//         class=" btn bg-red-700">Delete</button><button onclick="deleteData('+index+')"
//          class=" btn bg-yellow-700">Delete</button>`
//          html+="</tr>"

//          document.querySelector(".crudTable tbody").innerHTML = html;
//     })
//  }
// document.onload = showData();
//  function addData(){
//     if(validatation()==true){
//         var name = document.getElementById(".name").value
//         var age = document.getElementById(".age").value
//         var Address = document.getElementById(".address").value
//         var email = document.getElementById(".email").value

//         var peopleList;
//     if(localStorage.getItem("peopleList")==null){
//         peopleList =[];
//     }else{
//       peopleList.JSON.purse(localStorage.getItem("peoplelist"))
//     }
//     peopleList.push({
//         name : name,
//         age : age,
//         Address : Address,
//         email : email,
//     });
//     localStorage.setItem("peopleList",JSON.stringify(peopleList));
//     showData();
//     document.getElementById("name").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("Address").value = "";
//     document.getElementById("email").value = "  ";
//     }
//  }
//  console.log(addData())

var selectedLaw = null;
 function showAlert(message , className){
    const div = document.createElement("div");
     div.className = `alert${className} pt-2  text-red-600 `;
     div.appendChild(document.createTextNode(message));
     const container = document.querySelector("#container");
     const main = document.querySelector(".main");
     container.insertBefore(div,main);
     setTimeout(()=>document.querySelector(".alert").remove(),3000)

 } 
// clear all fild
function clearFild(){
    document.querySelector("#FirstName").value = "";
    document.querySelector("#LastName").value = "";
    document.querySelector("#RollNumber").value = "";
}
//add data
// document.querySelector("#student_form").addEventListener("submit",(e)=>{
//     e.preventDefault();
const btn = document.querySelector("#submit")
btn.addEventListener("Submit",function(){
 //get form
 const FirstName = document.querySelector("#FirstName").value;
 const LastName = document.querySelector("#LastName").value;
const RollNumber = document.querySelector("#RollNumber").value;
//validateForm
if(FirstName =="" || LastName =="" || RollNumber =="" ){
     showAlert("Please fill in all field","danger")
}

})

   
// })
 // Delete data
const list = document.querySelector(".student-list");
list.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("student data deleted", "red");
    }
});



