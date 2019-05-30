const messages = randomize([
	{
		type: 'pic',
		name: 'bryan1.jpg',
		author: 'Bryan Bowser',
	},
	{
		type: 'pic',
		name: 'thomas1.jpg',
		author: 'Thomas Marlette',
	},
	{
		type: 'pic',
		name: 'thomas2.jpg',
		author: 'Thomas Marlette',
	},
	{
		type: 'pic',
		name: 'thomas3.jpg',
		author: 'Thomas Marlette',
	},
	{
		type: 'pic',
		name: 'thomas4.jpg',
		author: 'Thomas Marlette',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: 'Before I knew Diana, she picked up a package of mine accidentally and slacked me to get it from her desk. I went to retrieve it on the 5th floor, and thought she was very stylish in that Guns N Roses shirt. Quite the first impression.',
		author: 'Bryan Bowser',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: 'How much time do you have? Quick wit comes to mind. Fierce loyalty. Pugnacious spirit if you dare wrong her. Diana is refreshing.',
		author: 'Bryan Bowser',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'Wry (in the best sense)',
		author: 'Bryan Bowser',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: 'When we hung out for a full 48 hours before realizing how long it had actually been. The snoring was terrible but the laughs were great!',
		author: 'Morgan Askins',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'Spirited (adj): full of energy, enthusiasm, and determination.',
		author: 'Morgan Askins',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: "This is weird and not sentimental. But my favorite memory of Diana is her always making tea in a big water glass in the flatiron kitchen all the time and that's when we would vent and have our talks.",
		author: 'Katie Schepers',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'the COOLEST \uD83D\uDE0E',
		author: 'Katie Schepers',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: "She's down to earth, welcoming, inviting, not afraid to speak her mind, fun, can talk to her about anything, she's a boss, she's real and keeps it real.",
		author: 'Katie Schepers',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'dangerous',
		author: 'Alda Pontes',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: "her swag. her class. her sass. her laugh. her hair. her hugs. her smile. her gentleness. her gaze.",
		author: 'Alda Pontes',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: "melting into the rug with diana, tommy and andrew. connecting more strongly because we're better when we're together.",
		author: 'Alda Pontes',
	},
]);

function renderPic(item) {
	return `<img src="./images/${item.name}">`;
}

function anonymize(name) {
	const names = name.split(' ');
	return names[0] + ' ' + names[1][0];
}

function renderText(item) {
	return `
		<h1 class="prompt">${item.prompt}</h1>
		<hr>
		<h1>${item.text}</h1>
		<h1>- ${anonymize(item.author)}</h1>
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
$content.hide();
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

