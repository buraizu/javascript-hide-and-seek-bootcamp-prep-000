function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
 let rankedList = document.querySelectorAll('.ranked-list li');
 for(let i = 0; i < rankedList.length; i++) {
   rankedList[i] = parseInt(rankedList[i]) + n;
 }

 
  
}

function deepestChild() {
  const grand_node = document.getElementById('grand-node');
  return grand_node.querySelector('div').querySelector('div').querySelector('div').querySelector('div');
}