$(document).ready(function() {
    $('#submit').click(function(e) {
    // Initializing Variables With Form Element Values
    var firstname = $('#firstname').val();
    var message = $('#msg').val();
    
    var state = $('#state').val();
    
    var email = $('#email').val();
    // Initializing Variables With Regular Expressions
    var name_regex = /^[a-zA-Z]+$/;
    var email_regex = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    
    // To Check Empty Form Fields.
    if (firstname.length == 0) {
    $('#head').text("* All fields are mandatory *"); // This Segment Displays The Validation Rule For All Fields
    $("#firstname").focus();
    return false;
    }
    // Validating Name Field.
    else if (!firstname.match(name_regex) || firstname.length == 0) {
    $('#p1').text("* For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
    $("#firstname").focus();
    return false;
    }
   
    
    else if (!email.match(email_regex) || email.length == 0) {
$('#p2').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
$("#email").focus();
return false;
}
// Validating Select Field.
else if (state == "Please Choose") {
$('#p3').text("* Please Choose any one option"); // This Segment Displays The Validation Rule For Selection
$("#state").focus();
return false;
}
// Validating Address Field.
else if (msg.length == 0) {
$('#p4').text("* Enter message *"); // This Segment Displays The Validation Rule For Address
$("#msg").focus();
return false;
}

else {
alert("Form Submitted Successfuly!");
return true;
}
});
});