var fibonacci = function(number) {
  if (number == 1) {
      return 0;
    }
  else if (number === 2) {
    console.log(number); //Count the number of 2's returned ana = fibonacci number. Code not necessary.
      return 1;
    }
  else if (number > 2) {
    return fibonacci(number - 2) + fibonacci(number -1);
    console.log(fibonacci(number));
  }
};

$(document).ready(function() {

  $("form#number").submit(function(event) {

    var userInput = $("input#number").val();
    var result = fibonacci(userInput);

    $("p#showNumber").text(result);

    event.preventDefault();

  });


});

