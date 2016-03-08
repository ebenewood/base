// // =============
//
// function arrMake (userString) {
//   return userString.String('');
// };
//
// function binDec (arrayVar) {
//   val = 0;
//     for (i = 0; i <= arrayVar.length; i++) {
//       alert('this is i ' + i);
//       a = parseInt(arrayVar[i]);
//       alert('this is a ' + a);
//       val = val += i * i + a;
//       alert('this is val ' + val);
//     };
//   return val;
// };

function stringMake (userString) {
  stringMade = String(userString);
  stringSplit = stringMade.split('');
  numArray = [];
    for (i = 0; i <= (stringSplit.length - 1); i++) {
      a = parseInt(stringSplit[i]);
      numArray.unshift(a);
  };
  return numArray;
};

function binDec (arrayVar) {
  a = 0;
  i = 0;
  for (i = 0; i <= (arrayVar.length - 1); i++) {
      if (arrayVar[i] != 0) {
      a += Math.pow(2,i);
    };
  };
  return a;
};

// ==========

// $(function () {
//   var a = binDec(stringMake($('input#num').val));
//   $('span').text(a);
// });

$(function () {

  $('form').submit(function () {
    event.preventDefault();
    $('#result').text(binDec(stringMake($('input#userInput').val())));
  });
});

// function validate(){
//   console.log('validated!');
// }
//
// $(document).ready(function(){
//   // we call the function
//   validate();
// });

// $(function () {
//
//   var input = $("#phrase").val();
//   var result = namedFunction(input);
//
//
//
//   $("#answer").text(result);
//
// });


//
// function binDec (arrayVar) {
//   for (i = 0; i <= (arrayVar.length - 1); i++) {
//       a = i;
//       b = i;
//       if ((arrayVar[i]) != 0) {
//         for (j = a; j <= 0; j--) {
//           b *= b;
//         };
//       };
//   };
// };

// function binDec (arrayVar) {
//   for (i = 0; i <= (arrayVar.length - 1); i ++) {
//     a = i;
//     b = i;
//     do {
//       a *= a;
//       b --;
//       console.log(a);
//     } while (b >= 0);
//   };
// };
