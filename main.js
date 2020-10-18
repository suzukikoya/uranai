'use strict';

const btn = document.getElementById('btn');
const result = document.getElementById('result');

// 下記の説明ボタンをクリックしたら切り替える処理

btn.addEventListener(`click`,()=>{
  // 下記の説明　ランダムに選出　0~0.99まで
  const num = Math.random();

  if(num<0.2){
    result.textContent = `大吉`;
  }
  else if(num<0.5){
    result.textContent = `中吉`;
  }
  else if(num<0.8){
    result.textContent = `小吉`;
  }else{
    result.textContent = `吉`;
  }
});
