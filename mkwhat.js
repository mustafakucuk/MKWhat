/*
** Author: Mustafa KÜÇÜK
** Email: devmustafakucuk@gmail.com
*/
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#sendButton').addEventListener('click', main);
});
function main() {
  var phoneNumber = document.getElementById("phoneNumber").value;
  var message = document.getElementById("message").value;
  window.open('https://api.whatsapp.com/send?phone='+phoneNumber+'&text='+message);
}
