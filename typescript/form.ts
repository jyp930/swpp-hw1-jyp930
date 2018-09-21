class Form {
    constructor(
        public email: string,
        public password: string,
        public password_confirmation: string,
        public phone_number: string,
        public fname: string,
        public lname: string,
        public age: number,
        public birth_month: string,
        public birth_day: number,
        public birth_year: number) {}
    // TODO: You may fill in functions in the class.

}

var but = document.createElement('button')
but.innerHTML = "Check"
but.onclick = function() {

    let alertMessage = '';

    var email : string = document.forms["form"]["email"].value;
    // TODO: Fill in the rest of the function. Use the Form class defined above
    let regexp = new RegExp(/^([^@\s])+@([^@.\s])+\.([a-z]{2,3})$/);
    let isValid = regexp.test(email);
    if(!isValid){
        document.getElementById('email-label').innerHTML = "X";
        document.getElementById('email-label').setAttribute('title', "characters@characters.domain (characters other than @ or whitespace followed by an @ sign, followed by more characters (not '@', '.', or whitespace: co.kr is not allowed in this case), and then a \".\". After the \".\", you can only write 2 to 3 letters from a to z).")
        alertMessage += 'Email\n'
    }else{ document.getElementById('email-label').innerHTML = "";}
    
    var password : string = document.forms["form"]["password"].value;
    regexp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
    isValid = regexp.test(password);
    if(!isValid){
        document.getElementById('password-label').innerHTML = "X";
        document.getElementById('password-label').setAttribute('title', "Must contain at least one number and one uppercase and one lowercase letter, and at least 8 or more characters.")
        alertMessage += 'Password\n'
    }else{ document.getElementById('password-label').innerHTML = "";}
    
    var password_confirmation : string = document.forms["form"]["password-confirmation"].value;
    if(password != password_confirmation){
        document.getElementById('password-confirmation-label').innerHTML = "X";
        document.getElementById('password-confirmation-label').setAttribute('title', "Must match password.")
        alertMessage += 'Password Confirmation\n'
    }else{ document.getElementById('password-confirmation-label').innerHTML = "";}
    
    var phone_number : string = document.forms["form"]["phone-number"].value;
    regexp = new RegExp(/^\d{3}-\d{4}-\d{4}$/);
    isValid = regexp.test(phone_number);
    if(!isValid){
        document.getElementById('phone-number-label').innerHTML = "X";
        document.getElementById('phone-number-label').setAttribute('title', "nnn-nnnn-nnnn: three numbers, then \"-\", followed by four numbers and a \"-\", then four numbers.")
        alertMessage += 'Phone number\n'
    }else{ document.getElementById('phone-number-label').innerHTML = "";}
    
    var fname : string = document.forms["form"]["fname"].value;
    regexp = new RegExp(/^[A-Z][a-z]{1,}$/);
    isValid = regexp.test(fname);
    if(!isValid){
        document.getElementById('fname-label').innerHTML = "X";
        document.getElementById('fname-label').setAttribute('title', "Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)")
        alertMessage += 'First Name\n'
    }else{ document.getElementById('fname-label').innerHTML = "";}
    
    var lname : string = document.forms["form"]["lname"].value;
    regexp = new RegExp(/^[A-Z][a-z]{1,}$/);
    isValid = regexp.test(lname);
    if(!isValid){
        document.getElementById('lname-label').innerHTML = "X";
        document.getElementById('lname-label').setAttribute('title', "Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)")
        alertMessage += 'Last Name\n'
    }else{ document.getElementById('lname-label').innerHTML = "";}
    
    var age : string = document.forms["form"]["age"].value;
    regexp = new RegExp(/^(200|[1][0-9][0-9]|[1-9]?[0-9])$/);
    isValid = regexp.test(age);
    if(!isValid){
        document.getElementById('age-label').innerHTML = "X";
        document.getElementById('age-label').setAttribute('title', "Must be a number between 0 and 200 (inclusive).")
        alertMessage += 'Age\n'
    }else{ document.getElementById('age-label').innerHTML = "";}
    
    var birth_month : string = document.forms["form"]["birth-month"].value;
    regexp = new RegExp(/^(January|February|March|April|May|June|July|August|September|October|November|December)$/);
    isValid = regexp.test(birth_month);0 
    if(!isValid){
        document.getElementById('birth-month-label').innerHTML = "X";
        document.getElementById('birth-month-label').setAttribute('title', "Must be one of \"January\", \"February\", ..., \"December\"")
        alertMessage += 'Month\n'

    }else{ document.getElementById('birth-month-label').innerHTML = "";}
    
    var birth_day : string = document.forms["form"]["birth-day"].value;
    regexp = new RegExp(/^(\d{1,2})$/);
    isValid = regexp.test(birth_day);
    if(!isValid){
        document.getElementById('birth-day-label').innerHTML = "X";
        document.getElementById('birth-day-label').setAttribute('title', "Must be a number of one or two digits.")
        alertMessage += 'Day\n'
    }else{ document.getElementById('birth-day-label').innerHTML = "";}
    
    var birth_year : string = document.forms["form"]["birth-year"].value;
    regexp = new RegExp(/^([1][8-9][0-9][0-9]|[2][0][1][0-8]|[2][0][0][0-9])$/);
    isValid = regexp.test(birth_year);
    if(!isValid){
        document.getElementById('birth-year-label').innerHTML = "X";
        document.getElementById('birth-year-label').setAttribute('title', "Must be a number between 1800 and 2018 (inclusive).")
        alertMessage += 'Year\n'
    }else{ document.getElementById('birth-year-label').innerHTML = "";}
    // TODO: Fill the alert message according to the validation result by following the form in README.md.
    
    if(alertMessage == ""){
        alertMessage = "Successfully Submitted!";
    } else {
        alertMessage = "You must correct:\n\n" + alertMessage;
    }

    alert(alertMessage);
    // Hint: you can use the RegExp class for matching a string with the `test` method.
    // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
    // Hint: modify 'title' attribute of each label to display your message
    // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
}
document.body.appendChild(but)
