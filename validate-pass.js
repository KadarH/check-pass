/*Actual validation function developed by KadarH*/
function ValidatePassword() {
  /*Array of rules and the information target*/
  var rules = [
    {
      Pattern: "[A-Z]",
      Target: "UpperCase"
    },
    {
      Pattern: "[a-z]",
      Target: "LowerCase"
    },
    {
      Pattern: "[0-9]",
      Target: "Numbers"
    },
    {
      Pattern: "[!@@#$%^&*]",
      Target: "Symbols"
    }
  ];

  //Just grab the password once
  var password = $(this).val();

  /*Length Check, add and remove class could be chained*/
  /*I've left them seperate here so you can see what is going on */
  /*Note the Ternary operators ? : to select the classes*/
  $("#Length").removeClass(
    password.length > 7 ? "glyphicon-remove" : "glyphicon-ok"
  );
  $("#Length").addClass(
    password.length > 7 ? "glyphicon-ok" : "glyphicon-remove"
  );

  /*Iterate our remaining rules. The logic is the same as for Length*/
  for (var i = 0; i < rules.length; i++) {
    $("#" + rules[i].Target).removeClass(
      new RegExp(rules[i].Pattern).test(password)
        ? "glyphicon-remove"
        : "glyphicon-ok"
    );
    $("#" + rules[i].Target).addClass(
      new RegExp(rules[i].Pattern).test(password)
        ? "glyphicon-ok"
        : "glyphicon-remove"
    );
  }
}

/*Bind our event to key up for the field. It doesn't matter if it's delete or not*/
$(document).ready(function() {
  $("#NewPassword").on("keyup", ValidatePassword);
});
