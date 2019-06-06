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
		text: "She has a positive impact on any relationship she's in.  She's incredibly invested in her friends and makes a real effort to improve others' lives.  I have a short list of absolutely amazing people that I've encountered and Diana made that list faster than anyone.  She's unreal.",
		author: 'Andrew Ingraham',
	},
	{
		type: 'text',
		prompt: 'Favorite memory of Diana...',
		text: "We were discussing ERGs (Employee Resource Groups) and Diana and her team had invested a lot of effort into creating bylaws.  During this informal meeting, we pushed back on a lot of the conclusions her team had reached.  I was absolutely blown away by Diana's receptiveness to feedback, even though it meant extra work for her and meant she'd need to push back against the group as a whole.  I was and still am so impressed by Diana's willingness to do what's right despite all the headaches it entails.  She's as good as they come.",
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

