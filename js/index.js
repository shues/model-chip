let UI = {};
UI.body = document.querySelector('#app');
let $ = function(name){
  let el = document.createElement('div');
  el.className = name;
  return el;
}


let chipBody = $('chipBody');

let counter = {};

counter.body = $('counter');
counter.state = {
  0:0,
  1:0,
  2:0,
  3:0,
  4:0,
  5:0,
  6:0,
  7:0,
};
counter.redraw = function(){
  let state = this.state;
  for(bit in state){
    console.log(state[bit]);
    let bitV = $('bit');
    bitV.textContent = state[bit];
    this.body.append(bitV);
  }
}

let memory = $('memory');




chipBody.append(counter.body);
chipBody.append(memory);

UI.body.append(chipBody);

UI.redraw = function(){
  counter.redraw();
}

UI.redraw();