const name=document.getElementById("name");
const div=document.querySelector(".tags");

const addName=()=>{
    if (name.value === "") {
        return null;
      }
    
 const tag= document.createElement("div");
 tag.setAttribute("class" ,"tag")


 tag.innerHTML='Hey I am' + name.value;

 div.append(tag);
};