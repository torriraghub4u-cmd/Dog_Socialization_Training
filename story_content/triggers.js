function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5orU342g83G":
        Script1();
        break;
      case "5z2qDUB8YS6":
        Script2();
        break;
      case "6TqKewoNcPw":
        Script3();
        break;
      case "5ck1ZM9sThC":
        Script4();
        break;
      case "6WtALdD2GSc":
        Script5();
        break;
      case "5WlCBs9gxuR":
        Script6();
        break;
      case "627OfcSdxjb":
        Script7();
        break;
      case "64I7RbY4fLp":
        Script8();
        break;
      case "6OoSdKwCgMp":
        Script9();
        break;
      case "6groGMz66Va":
        Script10();
        break;
      case "5jwJqZsi3e0":
        Script11();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('6SnbI0Q54Z4');
const duration = 250;
const easing = 'ease-out';
const id = '6MwzHJsEy8Z';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6SnbI0Q54Z4');
const duration = 250;
const easing = 'ease-out';
const id = '6MwzHJsEy8Z_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5zNCx9ab7No');
const duration = 750;
const easing = 'ease-out';
const id = '6Sog7bSpBbL';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5zNCx9ab7No');
const duration = 750;
const easing = 'ease-out';
const id = '6Sog7bSpBbL_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5pWz5G5CJwF');
const duration = 750;
const easing = 'ease-out';
const id = '6Sog7bSpBbL';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5pWz5G5CJwF');
const duration = 750;
const easing = 'ease-out';
const id = '6Sog7bSpBbL_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5ZGVkFcf63F');
const duration = 750;
const easing = 'ease-out';
const id = '6Sog7bSpBbL';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5ZGVkFcf63F');
const duration = 750;
const easing = 'ease-out';
const id = '6Sog7bSpBbL_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6owYFkOqsxv');
const duration = 250;
const easing = 'ease-out';
const id = '5hhBLTUHQrk';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5ilgXF2tAcC');
const duration = 250;
const easing = 'ease-out';
const id = '6NKMyAjJy1n';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5ofj7ZEBmCW');
const duration = 250;
const easing = 'ease-out';
const id = '6FEE6Xkx1mT';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
