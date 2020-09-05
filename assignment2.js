function display(x) {
	document.getElementById('result').value += x;
}
function add(n1,n2){
	return n1+n2;
}
function sub(n1,n2){
	return n1-n2;
}

function mult(n1,n2){
	
	return n1*n2;
	
}
function divide(n1,n2){
	return n1/n2;
}
function percent(n1,n2){
	return (n1*n2)/100;
}
function squrt(n){
	var res = Math.sqrt(n);
	if(!Number.isInteger(res)){
		return res.toFixed(3);
	}
	return res;
}
function absolute(){
	var num = document.getElementById('result').value;
	var res = Math.abs(num);
	document.getElementById('result').value = res;
	return res;
}
function solve(){
	var str = document.getElementById('result').value;
	var encodedStr = str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
   return '&#'+i.charCodeAt(0)+';';
});
	if(str.includes("+")){
		var arr = str.split("+");
		var n1 = arr[0];
		var num1 = parseInt(n1);
		var arr2 = arr[1].split("=");
		var n2 = arr2[0];
		var num2 = parseInt(n2);
		var sol = add(num1,num2);
	}
	
	else if(str.includes("*")){
		var arr = str.split("*");
		var n1 = arr[0];
		var num1 = parseInt(n1);
		var arr2 = arr[1].split("=");
		var n2 = arr2[0];
		var num2 = parseInt(n2);
		var sol = mult(num1,num2);
	}
	else if(str.includes("/")){
		var arr = str.split("/");
		var n1 = arr[0];
		var num1 = parseInt(n1);
		var arr2 = arr[1].split("=");
		var n2 = arr2[0];
		var num2 = parseInt(n2);
		var sol = divide(num1,num2);
	}
	else if(encodedStr.includes("&#8730;")){
		var arr = str.substring(1);
		var num = parseInt(arr);
		var sol = squrt(num);
	}
	else if(str.includes("%")){
		var arr = str.split("%");
		var n1 = arr[0];
		var num1 = parseInt(n1);
		var arr2 = arr[1].split("=");
		var n2 = arr2[0];
		var num2 = parseInt(n2);
		var sol = percent(num1,num2);
	}
	else if(str.includes("-")){
		var arr = str.split("-");
		var n1 = arr[0];
		var num1 = parseInt(n1);
		var arr2 = arr[1].split("=");
		var n2 = arr2[0];
		var num2 = parseInt(n2);
		var sol = sub(num1,num2);
	}else{
		var sol = document.getElementById('result').value;
	}
	document.getElementById('result').value = sol;
	return sol;
}
function clr(){
	document.getElementById('result').value = "";
}


function validateForm(){
	var name = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	if((name === "")||(phone === "")||(email === "")){
		document.getElementById('submit').disabled = true;
		return false;
	}
	else if(!isNaN(name[0])){
		document.getElementById('submit').disabled = true;
		return false;
	}
	else if(isNaN(phone)){
		document.getElementById('submit').disabled = true;
		return false;
	}
	else if(phone.length !== 10){
		document.getElementById('submit').disabled = true;
		return false;
	}
	else if((!email.includes("@"))||(!email.includes("."))){
		document.getElementById('submit').disabled = true;
		return false;
	}
	else{
		document.getElementById('submit').disabled = false;
		return true;
	}
}
function successful(){
	alert("Successfully registered");
}

function palindrome(){
	var palin = document.getElementById('palin').value;
	palin = palin.toLowerCase();
	var reverse = "";
	for (var i = palin.length - 1; i >= 0; i--) {
		reverse += palin[i];
	}

	if(palin === reverse){
		document.getElementById('palindromeMsg').innerHTML = "Entered string is a palindrome";
		return true;
	}
	else{
		document.getElementById('palindromeMsg').innerHTML = "Entered string is not a palindrome";
		return false;
	}
}
function anagram(){
	var str1 = document.getElementById('anag1').value;
	var str2 = document.getElementById('anag2').value;
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	var arr1 = str1.split("");
	var arr2 = str2.split("");
	arr1.sort();
	arr2.sort();
	str1 = arr1.join("").trim();
	str2 = arr2.join("").trim();
	if(str1==str2){
	document.getElementById('anagramMsg').innerHTML = "They are anagrams";
	return true;
}else{
	document.getElementById('anagramMsg').innerHTML = "They are not anagrams";
	return false;
}
	
}



function randomNum(num){
	document.getElementById(num).value = Math.floor(Math.random()*1000);
}

function survive(){
	var n1 = document.getElementById('num1').value;
	var n2 = document.getElementById('num2').value;
	var nP1 = parseInt(n1);
	var nP2 = parseInt(n2);
	var rem1 = nP1%3;
	var rem2 = nP2%3;
	var sol = numCheck(rem1,rem2);
	document.getElementById('solution').innerHTML = sol;
	return sol;
}
function numCheck(n1,n2){
	if(n1==n2){
		return "TIE";
	}
	if(((n1==0)||(n2==0))&&((n1==1)||(n2==1)) ){
		return "Human Wins!"
	}
	if(((n1==0)||(n2==0))&&((n1==2)||(n2==2)) ){
		return "Nuclear Bomb Wins!"
	}
	else{
		return "Cockroach Wins!"
	}
}

function currencyConvertor(){
	var amount = document.getElementById('amount').value;
	var currIn = document.getElementById('currencyIn').value;
	currIn = currIn.toUpperCase();
	var currOut = document.getElementById('currencyOut').value;
	currOut = currOut.toUpperCase();
	var convertion = currIn +"_"+currOut;
	var url = "https://free.currconv.com/api/v7/convert?q="+convertion+"&compact=ultra&apiKey=ecd96f38ab9cbbe978b7";
	let xhr = new XMLHttpRequest();
	xhr.open('GET',url);
	xhr.send();
	xhr.onload = function(){
		if(xhr.status != 200){
			alert('Error='+ xhr.status+':'+ xhr.statusText);
		}
		else{
			var data = JSON.parse(xhr.responseText);
			var exchangeRate = data[convertion];
			document.getElementById('finalOut').innerHTML ="Converted amount is: "+ (exchangeRate*amount).toFixed(3) +" "+ currOut;
		}
	};
	return "Converted amount is: "+ (exchangeRate*amount).toFixed(3) +" "+ currOut;
}