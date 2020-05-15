// Format phone number input
var cleave = new Cleave('#number', {
    numericOnly: true,
    blocks: [0, 3, 3, 4],
    delimiters: ['(', ') ', '-']
});
if ($('#reservations-form').length) {
    $('#reservations-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"./includes/mail.php",
                    data: $(form).serialize(),
                    success: function() {
                        document.querySelector('.alert-reservation').style.display = 'block';
                        document.getElementById("reservations-form").style.display= "none";
                        console.log("Success");
                    },

                    error: function(){
                        document.querySelector('.alert-reservation-error').style.display = 'block';
                        document.getElementById("reservations-form").style.display= "none";
                        console.log("Fail");
                    }
                });
            }
        });
    });
}
if ($('#contact-form').length) {
    $('#contact-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"./includes/mail-3.php",
                    data: $(form).serialize(),
                    success: function() {
                        document.querySelector('.alert-contact').style.display = 'block';
                        document.getElementById("contact-form").style.display= "none";
                        console.log("Success");
                    },

                    error: function(){
                        document.querySelector('.alert-contact-error').style.display = 'block';
                        document.getElementById("contact-form").style.display= "none";
                        console.log("Fail");
                    }
                });
            }
        });
    });
}