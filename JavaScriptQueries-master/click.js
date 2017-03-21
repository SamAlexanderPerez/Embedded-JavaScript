//declare samecolor() here
function samecolor(hex){
  const doc = document;
  let section = doc.querySelectorAll("#samecolor div");
  for(let h=0;h<section.length;h++){
    section[h].style.backgroundColor=hex;
  }
}
//declare diffcolor() here
function diffcolor(hex){
  const doc = document;
  let div = doc.querySelectorAll("#diffcolor div");
  div.style.backgroundColor =
}
