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
		type: 'pic',
		name: 'ahmadu1.jpg',
		author: 'Ahmadu Gidado',
	},
	{
		type: 'pic',
		name: 'kim1.jpg',
		author: 'Kim Shipman',
	},
	{
		type: 'pic',
		name: 'kyle1.jpg',
		author: 'Kyle Konicek',
	},
	{
		type: 'pic',
		name: 'abbie1.jpg',
		author: 'Abbie Orlando',
	},
	{
		type: 'pic',
		name: 'nick1.jpg',
		author: 'Nick Moloney',
	},
	{
		type: 'pic',
		name: 'ben1.jpg',
		author: 'Ben Kies',
	},
	{
		type: 'pic',
		name: 'rachel1.jpg',
		author: 'Rachel Kalkstein',
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
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'Caring',
		author: 'Andrew Ingraham',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: "She's incredibly invested in her friends and makes a tremendous effort to improve others' lives.  Your life is better for having Diana in it.",
		author: 'Andrew Ingraham',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: "That time at Flatrion we were discussing ERGs and Diana was so willing to hear others' opinions and make changes even after all the work she had put into it.  I was blown away by how receptive she was to others and it made an incredible impression on me.",
		author: 'Andrew Ingraham',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'gracious',
		author: 'Ahmadu Gidado',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: "She cares deeply about the ones she loves",
		author: 'Ahmadu Gidado',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: "Hanging out with her family on the rooftop. It was lit.",
		author: 'Ahmadu Gidado',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'Genuine',
		author: 'Kim Shipman',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: "How welcoming and inviting she is to everyone she meets",
		author: 'Kim Shipman',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: "In preparation for her 2018 Coachella trip, rapping old school Eminem lyrics in the recruiting pod",
		author: 'Kim Shipman',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'MAGNANIMOUS',
		author: 'Misael Abreu',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: "Diana is all in with the people in her life - she doesn't just meet you, she digs deep!",
		author: 'Misael Abreu',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: "That one time that you hosted team trivia about team members at a team outing, revealing how you've been taking notes on the details of all our lives :)",
		author: 'Misael Abreu',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'Sensational',
		author: 'Kyle Konicek',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: "Her eye for art, ear for music, sense of style. Diana's genuine personality and overall positive vibe. Also her gutta gutta realness.",
		author: 'Kyle Konicek',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: `Anytime I would be having a wack work day, Diana would brighten it simply with a smile or a "whats up".`,
		author: 'Kyle Konicek',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: `Our first conversation. We randomly bumped into each other on the E train on the way to work, and had a long conversation about how long it takes girls to get ready in the morning :)`,
		author: 'Ben Kies',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'empathetic',
		author: 'Abbie Orlando',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: "In one hangout with Diana we somehow go from laughing tears of joy, to talking deeply about politics, to confiding in each other about our hopes and dreams.  She is an incredibly loyal, adventurous, and thoughtful friend.  I'm so blessed to have her in my life &#10084;&#65039;.",
		author: 'Abbie Orlando',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: `Our heart to heart after escaping death in Maine`,
		author: 'Abbie Orlando',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'Authentic',
		author: 'Nick Moloney',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: "Diana is open to almost anything and has a great attitude doing it! Learning to ski, for example, is hard, but she constantly had a positive outlook on it",
		author: 'Nick Moloney',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: `Watching her climb the rungs of the ladders in Acadia even though she wasn't happy about it since it was so cold and windy, but we made it!`,
		author: 'Nick Moloney',
	},
	{
		type: 'text',
		prompt: 'Describe Diana in one word...',
		text: 'Loving',
		author: 'Rachel Kalkstein',
	},
	{
		type: 'text',
		prompt: 'What I love about Diana...',
		text: "She's always there for you when you need her. Hands down the most hilarious person I know. She's honest, generous and always fun to be around.Everything you could ever ask for in a friend.",
		author: 'Rachel Kalkstein',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: `So many memories. Way too hard to choose just one. In general I would have to say nothing makes me smile more than when I think about the times we have laughed together and Diana cant stop laughing for 10 minutes straight. Thank God for that contagious laugh that brings so much joy to my heart. I LOVE YOU.`,
		author: 'Rachel Kalkstein',
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

