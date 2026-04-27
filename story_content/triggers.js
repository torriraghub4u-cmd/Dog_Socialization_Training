function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5deyIZY5pNu":
        Script1();
        break;
      case "5wYGTPJijOE":
        Script2();
        break;
      case "6Mw868B9Ylw":
        Script3();
        break;
      case "6HQsgErR6Az":
        Script4();
        break;
      case "5Yr0BYtptB3":
        Script5();
        break;
      case "5gg4kYgohnd":
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
