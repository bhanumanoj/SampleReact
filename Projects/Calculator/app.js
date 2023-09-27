// let string="";
// let buttons = document.querySelectorAll('.button')
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML=='='){
//             string=eval(string)
//         }
//         console.log(e.target);
//         string=string+e.target.innerHTML;
//         document.querySelector('input').value=string;
//     })
// })

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');
  console.log(value);
  console.log(typeof(value));

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );