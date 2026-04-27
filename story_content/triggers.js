function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6FRXy3mMlc9":
        Script1();
        break;
      case "6GZQKYFMTnF":
        Script2();
        break;
      case "5e1Z0fZQfwM":
        Script3();
        break;
      case "6GWP92qwuXI":
        Script4();
        break;
      case "6iruYDzAD18":
        Script5();
        break;
      case "6FDbCnxjkPk":
        Script6();
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

window.Script2 = function()
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

window.Script3 = function()
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

window.Script4 = function()
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

window.Script5 = function()
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

window.Script6 = function()
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

};
