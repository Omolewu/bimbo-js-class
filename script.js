// function functionname(parameters) {
//code;
// }

function sum(a = 0, b = 0) {
    document.getElementById('sum').innerHTML = a - b;
}
function getName() {
    var name = document.querySelector('#name').value;
    var phone = document.querySelector('#phone').value;
    var email = document.querySelector('#email').value;
    document.querySelector('#getNameFeedback').innerHTML = name;

}

// var content = document.getElementById('jsclass').innerHTML;
// console.log(content);