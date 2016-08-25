// $(document).ready(function() {
//     //  console.log('Jquery running')
//
//     var number1;
//     var number2;
//     var operator;
//     var answer;
//     $('.digit').on('click', function() {
//         //alert('You Clicked a digit!')
//         var clickedNumber = ($(this).text());
//         $('#screen').append(clickedNumber)
//     })
//     $('.operator').on('click', function() {
//         if (number1) {
//             number2 = parseInt($('#screen').text(), 10);
//         } else {
//             number1 = parseInt($('#screen').text(), 10);
//         }
//         alert($(this).text())  //or alert(this.innerText())
//
//         if (number1 && number2 && operator) {
//             //    console.log("I have both numbers and operator!");
//             if (operator === "+") {
//                 answer = (number1 + number2)
//             } else if (operator === "-") {
//                 answer = (number1 - number2)
//             } else if (operator === "x") {
//                 answer = (number1 * number2)
//             } else if (operator === "÷") {
//                 answer = number1 / number2
//             }
//             console.log(answer);
//         }
//         operator = ($(this).text())
//
//     })
//
//     // console.log("number:", number1);
//     // console.log("number:", number2);
//
//
// });
//======================================================================

$(document).ready(function() {
    //  console.log('Jquery running')
    var numb1;
    var numb2;
    var operator;
    var answer;
    $('.digit').on('click', function() {
        //alert('You Clicked a digit!')
        var clickedNumber = ($(this).text());
        $('#screen').append(clickedNumber)
    })
    $('.clear').on('click', function() {
        numb1 = 0
        numb2 = 0
        operator = "";
        answer = 0
        $('#screen').text("");
    })
    $('.operator').on('click', function() {
        key = ($(this).text())
        if (key !== "=") {
            numb1 = parseInt($('#screen').text())
            operator = key
            $('#screen').append(key)
                // console.log(indx);
        } else { //we clicked equal =
            var indx = ($('#screen').text()).indexOf(operator)
                // ($('#screen').text()).slice(indx)
            numb2 = parseInt($('#screen').text().slice(indx + 1));
            $('#screen').append(key)
            if (operator === "+") {
                answer = (numb1 + numb2)
            } else if (operator === "-") {
                answer = (numb1 - numb2)
            } else if (operator === "x") {
                answer = (numb1 * numb2)
            } else if (operator === "÷") {
                if (numb2 === 0) {
                    $('#screen').text("ERROR")
                } else {
                    answer = numb1 / numb2
                }
            }
            $('#screen').append(answer)
                // numb2 = parseInt($('#screen').text())
        }
        // console.log(operator);
    })
    // console.log("number:", number1);
    // console.log("number:", number2);
});
