/**
 * 
 */
const form = document.querySelector("form");
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNo = document.getElementById('phoneNo');
const message = document.getElementById('message');

let isFormValid = false;

const validationCheck = () =>{
	validateInputs();
	
	if(isFormValid){
		alert("Submitted successfully! Thank you for messaging me.");
		return true;
	}
	else{
		return false;
	}
}

const resetElement = (element) =>{
	element.classList.remove("invalid");
	element.nextElementSibling.classList.add("hidden");
}

const invalidateElement = (element, message) =>{
	element.classList.add("invalid");
	element.nextElementSibling.classList.remove("hidden");
	element.nextElementSibling.innerText = message;
}

const isValidEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 	return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone_No) => {
 	const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  	return re.test(String(phone_No).toLowerCase());
};

const validateInputs =() =>{
	isFormValid = true;
	resetElement(firstName);
	resetElement(lastName);
	resetElement(email);
	resetElement(phoneNo);
	resetElement(message);
	
	if(firstName.value.length <= 0){
		isFormValid = false;
		invalidateElement(firstName, "Invalid: Input is required");
	}
	else if(firstName.value.length < 3){
		isFormValid = false;
		invalidateElement(firstName, "Invalid Input Size: Input of > 2 characters is required");	
	}
	else;
	
	if(lastName.value.length <= 0){
		isFormValid = false;
		invalidateElement(lastName, "Invalid: Input is required");
	}
	else if(lastName.value.length < 3){
		isFormValid = false;
		invalidateElement(lastName, "Invalid Input Size: Input of > 2 characters is required");	
	}
	else;
	
	if(!email.value){
		isFormValid = false;
		invalidateElement(email, "Invalid: Input is required");
	}
	else if(!isValidEmail(email.value)){
		isFormValid = false;
		invalidateElement(email, "Invalid Input: Incorrect E-mail format");
	}
	else;
	
	if(!phoneNo.value){
		
	}
	else if(!isValidPhone(phoneNo.value)){
		isFormValid = false;
		invalidateElement(phoneNo, "Invalid Input: Incorrect phone no. format");
	}
	else;
	
	if(message.value.length <= 0){
		isFormValid = false;
		invalidateElement(message, "Invalid: Input is required");
	}
	else if(message.value.length < 21){
		isFormValid = false;
		invalidateElement(message, "Invalid: Input of > 20 characters of words is required");
	}
	else;
	
	isValidationOn = false;
}