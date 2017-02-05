$(document).ready(function(){
    
    function isStrEmpty(str){
        return (str.length == 0);
    }
    
    $(document).on('keyup', '.validate', function(e){
        
        if ( isStrEmpty( $(this).val() ) ){
            $(this).addClass('error');        
        } else {
            $(this).removeClass('error');
        }
        
    });
    
    $(document).on('click', '#submit-login', function(e){
        
        e.preventDefault();
        
        var user_name_input     = $('#user-name'), 
            user_email_input     = $('#user-email'),
            user_pass_input     = $('#user-password');
        
        var user_name         = user_name_input.val().trim(), 
            user_email         = user_email_input.val().trim(), 
            user_password     = user_pass_input.val().trim();
        
        user_name_input.val(user_name);
        user_email_input.val(user_email);
        user_pass_input.val(user_password);
        
        var validated = true;
        $('.error-msg').html('');
        
        if ( isStrEmpty(user_name) ){
            user_name_input.addClass('error');
            validated = false;
        } else {
            user_name_input.removeClass('error');
        }
        
        if ( isStrEmpty(user_email) ){
            user_email_input.addClass('error');
            validated = false;
        } else {
            user_email_input.removeClass('error');
        }
        
        if ( isStrEmpty(user_password) ){            
            user_pass_input.addClass('error');
            validated = false;
        } else {
            user_pass_input.removeClass('error');
        }
        
        if (validated){
            console.log('User Name: ' + user_name);
            console.log('User Email: ' + user_email);
            console.log('User Password: ' + user_password);
            $(this).text('Well done');
        } else {
            $('.error-msg').html('<p style="color: #000059;">You have not completed all fields ▼</p>');
        }
        
    });
  
});