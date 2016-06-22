var wdi_24_names = ["Adrianna", "Andrew", "Christian", "Daniel", "David", "Desi", "Emily", "Jenny", "Kate", "Kevin", "Matt", "Michael", "Ramin", "Taylor"];

for(var i = 0; i < wdi_24_names.length; i++) {
  console.log(wdi_24_names[i]);
};

// var i = 0;
// function eachName() {
//   console.log(wdi_24_names[i]);
//   i++;
// }

// var random = Math.random();
// var upToEndOfArray = random * wdi_24_names.length;
// var integer = Math.floor(upToEndOfArray);

function namePicker() {
  var integer = Math.floor(Math.random() * wdi_24_names.length);
  console.log(wdi_24_names[integer]);
}
