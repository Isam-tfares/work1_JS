     /*  Q1    */
let pElement = document.getElementById("para");
function high(element){
    let paragraph = pElement.textContent;
    let textInsidep = pElement.innerHTML = paragraph;
    let words = paragraph.split(" ");
    for(let i=0;i<words.length;i=i+1){
        if(words[i].length > 6){
            element.innerHTML = element.innerHTML.replace(words[i], '<mark>$&</mark>')
        }
    }
    return;
}
high(pElement);

/*   Q2   */
var a = document.createElement('a');
var link = document.createTextNode('source');
a.appendChild(link);
a.title="source";
a.href = "https://forcemipsum.com/";
document.getElementById("container").appendChild(a);
/*    Q4  */
function count(element){
    var count_para = 0;
    paragraph=pElement.textContent;
    let words = paragraph.split(" ");
    for(var i = 0; i<words.length; i++){
        count_para = count_para + 1;
    }
    return count_para;
}
document.getElementById("countparagraph").innerHTML=count(pElement);

/*    Q5    */
Array.from(document.querySelectorAll('p'))
  .forEach(p => {
    p.innerHTML = p.innerHTML
    .replace(/\?/g,'&#129300')
    .replace(/\!/g,'&#128562');
  })

/*  EXERCICE 2  */
/* Q1  */

const label_user = document.getElementById('username_label');
label_user.textContent = 'username';
label_user.value = 'username';
label_user.innerHTML = 'username';
const label_password = document.getElementById('password_label');
label_password.textContent = 'password';
const label_confirme = document.getElementById('confirme_label');
label_confirme.textContent = 'confirme password';

/*  Q2   */
function validation_remplissage() {
    var enter_username = document.forms["myForm"]["username"].value;
    var enter_password = document.forms["myForm"]["password"].value;
    var enter_confirme = document.forms["myForm"]["confirmation"].value;
    if (enter_username == "" || enter_password == "" || enter_confirme == "" ) {
      alert("il faut completer les champs");
      return false
    }
  }
  /*   Q3  */
  function validation_password(){
    var enter_password = document.forms["myForm"]["password"].value;
    var enter_confirme = document.forms["myForm"]["confirmation"].value;
    if(enter_password!=enter_confirme){
      alert("les deux mot de passe entres sont differentes");
       return false;
    }
  }
  /*  Q4   */
  function button_disabled()
  {
      var form = document.forms["myForm"].elements;
      var submit = true;
      var enter_password = document.forms["myForm"]["password"].value;
      var enter_confirme = document.forms["myForm"]["confirmation"].value;

      for (var i = 0; i < form.length; i++) {
          if (form[i].value.length == 0){
            submit = false;
          }
      }
      if(enter_password != enter_confirme){
        submit= false;
      }
      if (submit){
          document.getElementById('input_Submit').disabled = false;
      }
      else{
        document.getElementById('input_Submit').disabled = disabled;
      }
  }
 /*   Q5  */
function Registration(){
  alert("you register yours informations with succes")
}

/*  Q6  */
form.addEventListener('submit', (e) => {
  let messages = []
  if(username.value === '' || username.value == null){
    messages.push('Enter your username')
  }
  if(password.value === '' || password.value == null){
    messages.push('Enter your username')
  }
  if(confirme.value === '' || confirme.value == null){
    messages.push('Enter your username')
  }
})

/*   Q6  */
function empty_input(){
var enter_username = document.forms["myForm"]["username"].value;
var enter_password = document.forms["myForm"]["password"].value;
var enter_confirme = document.forms["myForm"]["confirmation"].value;
if (enter_username == "") {
  document.getElementById("username").visibility="visible";
}
if (enter_password == "") {
  document.getElementById("password").visibility="visible";
}
if (enter_confirme == "") {
  document.getElementById("confirme").visibility="visible";
}
}