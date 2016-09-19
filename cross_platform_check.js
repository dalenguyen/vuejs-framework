<script>
  if(window.addEventListener){ // for >= IE9
    document.getElementById('id').addEventListener('click', function(){
      // your function code
    }, false);
  } else if (window.attachEvent) { // for IE8
    document.getElementById('id').attachEvent('onclick', function(){
      // your function code
    });
  }
</script>
