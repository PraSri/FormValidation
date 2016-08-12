var f=0;
var i=0;
var j=0;
var k=0;
var length;
var compare;
function validation(){
f=0;
length=document.getElementById("password").value.length;
if(document.getElementById("first_name").value==""){
document.getElementById("iv1").innerHTML="you must type in first_name of max 12 words";
f+=1;
}
else{
document.getElementById("iv1").innerHTML="";
}
if((document.getElementById("email").value.indexOf("@"))==-1){
document.getElementById("iv2").innerHTML="invalid email";
f=1;
}
else
{
document.getElementById("iv2").innerHTML="";
}
//password check
if(length==0){
document.getElementById("iv3").innerHTML="password must contain uppercase and lowercase";
f=1;
}
while(i<length){
compare=document.getElementById("password").value.charAt(i).toUpperCase();
	if(document.getElementById("password").value.charAt(i)!=compare){
		j=0;
while(j<length){
	compare=document.getElementById("password").value.charAt(j).toLowerCase();
	if(document.getElementById("password").value.charAt(j)!=compare){
	document.getElementById("password").innerHTML="";
	k=1;
	}
	else if((j==length-1) && (k==0)){
	document.getElementById("iv3").innerHTML="password must contain uppercase and lowercase";
	f+=1;
	}
	j++;
	}
	}
	else if((i==length-1) && (k==0)){
	document.getElementById("iv3").innerHTML="password must contain uppercase and lowercase";
	f+=1;
	}
	
	i++;	
}
if(f!=0){
return false;
}
else{
return true;
}
}