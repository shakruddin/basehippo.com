function myPassword() {
    var myInput = document.getElementById("myInput");
    var myInput1 = document.getElementById("myInput1");
    if (myInput.type === "password") {
        myInput.type = "text";
        myInput1.type = "text";
    } else {
        myInput.type = "password";
        myInput1.type = "password";
    }
}


$(function () {
    var minlength = 3;

    $("#myInput1").keyup( function () {
        var password = $('#myInput').val();
        var value = $(this).val();
        if (value.length >= 1){
            if(password === value){
                $('#signup-user').removeAttr("disabled", "disabled")
                $('#myInput1').removeClass('uk-form-danger')
            }else{
                $('#signup-user').attr("disabled", "disabled")
                $('#myInput1').addClass('uk-form-danger')
            }
        }
    });
});