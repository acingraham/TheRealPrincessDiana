const messages = randomize([
	{
		text: "First message that is super super super super super super super super super super super super super super long",
		author: "Person1",
	},
	{
		text: "Second message that is super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super  super long",
		author: "Person2",
	},
	{
		text: "Third message",
		author: "Person3",
	},
]);

const fadeLength = 1000;
const messageLength = 7000;

const $h1 = $('h1');
let index = 0;

$h1.text(messages[index].text);
$h1.fadeIn(fadeLength);

setInterval(function() {
	index = (index + 1) % messages.length;
	const message = messages[index];
	$h1.fadeOut(fadeLength, function() {
		$h1.text(message.text);
	}).fadeIn(fadeLength);
}, messageLength);

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function randomize(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * (arr.length - i)) + i;
    swap(arr, i, randomIndex);
  }
  return arr;
}

