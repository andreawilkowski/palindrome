var isPalindrome = function(string){
  for(i=0; i<=string.length/2; i++) {
    if(!(string.charAt(i) === string.charAt(string.length-(1+i)))) {
      return false;
    }
  };
  return true;
};

$(document).ready(function(){
  $("#palindrome").submit(function(event) {
    event.preventDefault();
    var string = $("#string").val();
    $(".solution").text(isPalindrome(string));
  });
});
