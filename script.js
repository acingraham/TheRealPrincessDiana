const messages = randomize([
	"First message",
	"Second message",
	"Third message",
]);

const fadeLength = 1000;
const messageLength = 7000;

const $h1 = $('h1');
let index = 0;

$h1.text(messages[index]);
$h1.fadeIn(fadeLength);

setInterval(function() {
	index = (index + 1) % messages.length;
	const message = messages[index];
	$h1.fadeOut(fadeLength, function() {
		$h1.text(message);
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

