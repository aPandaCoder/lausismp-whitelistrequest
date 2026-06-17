document
.getElementById("joinForm")
.addEventListener("submit",async function(e){

e.preventDefault();

const data=new FormData(this);

const response=await fetch(

"https://edwinenyvonne.nl/lausibeats/lausismp.php",

{

method:"POST",

body:data

}

);

if(response.ok){

alert("Whitelist aanvraag verzonden!");

this.reset();

}else{

alert("Er ging iets fout.");

}

});
