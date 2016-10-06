// This for the html form
<button id="formSubmission">Submit</button>

// This for the script part
 $("#formSubmission").click(function(){
       $(':input[value=""]').attr('disabled', true);
 });
