const quotes = [
	{
		quote: "Frankly, my dear, I don’t give a damn.",
		credit: "GONE WITH THE WIND, 1939",
	},
	{
		quote: "Toto, I've got a feeling we're not in Kansas anymore.",
		credit: "THE WIZARD OF OZ, 1939",
	},
	{ quote: "Here's looking at you, kid.", credit: "CASABLANCA, 1942" },
	{ quote: "May the Force be with you.", credit: "STAR WARS, 1977" },
	{ quote: "Rosebud.", credit: "CITIZEN KANE, 1941" },
	{
		quote: "Keep your friends close, but your enemies closer.",
		credit: "THE GODFATHER II, 1974",
	},
	{ quote: "Say hello to my little friend!", credit: "SCARFACE, 1983" },
	{
		quote: "Gentlemen, you can't fight in here! This is the War Room!",
		credit: "DR. STRANGELOVE, 1964",
	},
	{ quote: "Nobody puts Baby in a corner.", credit: "DIRTY DANCING, 1987" },
	{ quote: "To infinity and beyond!", credit: "Toy Story, 1995" },
	{
		quote: "They may take our lives, but they'll never take our freedom!",
		credit: "Braveheart, 1995",
	},
	{ quote: "I'm ready for my close-up.", credit: "Sunset Boulevard, 1950" },
	{
		quote: "I'll have what she's having.",
		credit: "When Harry Met Sally, 1989",
	},
	{ quote: "Here's Johnny!", credit: "The Shining, 1980" },
	{ quote: "Bond. James Bond.", credit: "Dr. No, 1962" },
	{
		quote: "Hasta la vista, baby.",
		credit: "Terminator 2: Judgment Day, 1991",
	},
	{
		quote: "You is kind. You is smart. You is important.",
		credit: "The Help, 2011",
	},
	{
		quote: "I am your father.",
		credit: "Star Wars Episode V: The Empire Strikes Back, 1980",
	},
	{
		quote: "Magic Mirror on the wall, who is the fairest one of all?",
		credit: "Snow White and the Seven Dwarfs, 1937",
	},
	{
		quote: "Life is a banquet, and most poor suckers are starving to death!",
		credit: "Auntie Mame, 1958",
	},
	{ quote: "Houston, we have a problem.", credit: "Apollo 13, 1995" },
	{ quote: "My precious.", credit: "The Lord of the Rings: Two Towers, 2002" },
	{
		quote:
			"My mama always said life was like a box of chocolates. You never know what you're gonna get.",
		credit: "Forrest Gump, 1994",
	},
	{ quote: "There's no place like home.", credit: "The Wizard of Oz, 1939" },
	{
		quote: "Let your head rest in my hand. I got you.",
		credit: "Moonlight, 2016",
	},
	{
		quote: "Last Time I Trusted Someone, I Lost An Eye",
		credit: "Captain America: The Winter Soldier, 2014",
	},
	{
		quote:
			"And You Will Know My Name Is The Lord When I Lay My Vengeance Upon You!",
		credit: "Pulp Fiction, 1994",
	},
	{ quote: "Hold On To Your Butts.", credit: "Jurassic Park, 1993" }
];


let x = Math.floor(Math.random() * quotes.length);

const quoteText = document.getElementById("quote");
const citeText = document.getElementById("citation");

quoteText.innerText = quotes[x].quote;
citeText.innerText = quotes[x].credit;