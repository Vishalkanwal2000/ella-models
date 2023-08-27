const input = document.getElementById("num");
const container=document.querySelector(".container");


const geneta=(n)=>{
let text=" ";
const letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(let i=0;i<n;i++){
const random=(Math.random() * 25).toFixed(0);
 text+=letter[random];


}
return text;
};


const getdata = ()=>{
 const numof=Number(input.value);

const para = document.createElement("p");

let deta=" ";

for(let i=0;i<numof;i++){

const randomNumber=(Math.random()*10).toFixed(0);

 deta+=geneta(randomNumber);

 deta+="  ";

}

para.innerHTML=deta;

para.setAttribute("class","paras");

container.append(para);
};
