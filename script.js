const messages = randomize([
	{
		type: 'pic',
		name: 'bryan1.jpg'
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: 'Before I knew Diana, she picked up a package of mine accidentally and slacked me to get it from her desk. I went to retrieve it on the 5th floor, and thought she was very stylish in that Guns N Roses shirt. Quite the first impression.',
		author: 'Bryan',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: 'How much time do you have? Quick wit comes to mind. Fierce loyalty. Pugnacious spirit if you dare wrong her. Diana is refreshing.',
		author: 'Bryan',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'Wry (in the best sense)',
		author: 'Bryan',
	},
]);

function renderPic(item) {
	return `<img src="./images/${item.name}">`;
}

function renderText(item) {
	return `
		<h1 class="prompt">${item.prompt}</h1>
		<hr>
		<h1>${item.text}</h1>
		<h1>- ${item.author}</h1>
	`;
}

function render(item) {
	if (item.type === 'pic') {
		return renderPic(item);
	} else {
		return renderText(item);
	}
}

const fadeLength = 1000;
const messageLength = 10000;

let index = 0;
const $content = $('#content');
const item = render(messages[index]);
$content.html(item);
$content.fadeIn(fadeLength);

setInterval(function() {
	index = (index + 1) % messages.length;
	const item = render(messages[index]);
	$content.fadeOut(fadeLength, function() {
		$content.html(item);
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

