// your code here
const inputName=document.getElementById("name");
const inputYear=document.getElementById("year");
const h3Content=document.getElementById("url");
const btn=document.getElementById("button");
btn.addEventListener('click',(e)=>{
	e.preventDefault();
	if(inputName.value!=="" && inputYear.value!=="" ){
		h3Content.innerText+=`?name=${inputName.value}&year=${inputYear.value}`
	}
	else if(inputName.value!==""){
		h3Content.innerText+=`?name=${inputName.value}`
	}else if(inputYear.value!==""){
		h3Content.innerText+=`?year=${inputYear.value}`
	}
})