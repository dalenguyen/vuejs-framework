<script>
// For JavaScript
  if(window.addEventListener){ // for >= IE9
    document.getElementById('id').addEventListener('click', function(){
      // your function code
    }, false);
  } else if (window.attachEvent) { // for IE8
    document.getElementById('id').attachEvent('onclick', function(){
      // your function code
    });
  }
  
// For JQuery
$('id').on('click', function(event){
  // your function code
});
</script>
