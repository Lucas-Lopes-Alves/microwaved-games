let produto = prompt("produto").toLowerCase();
let quantidade = parseInt(prompt("quantidade em estoque: "));
if (produto ==="smartphone" && quantidade<10){
  alert("reabastecer estoque");
}else if (produto ==="laptop" && quantidade<15){
  alert("reabastecer estoque");
}else if (produto ==="console" && quantidade<20){
  alert("reabastecer estoque");
}else if (produto ==="monitores" && quantidade<30){
  alert("reabastecer estoque");
}else{
  alert("estoque ok")
}