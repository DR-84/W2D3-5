const superheroes = [
	{
		name: 'Batman',
		publisher: 'DC Comics',
		alter_ego: 'Bruce Wayne',
		first_appearance: 'Detective Comics #27',
		weight: '210'
	},
	{
		name: 'Superman',
		publisher: 'DC Comics',
		alter_ego: 'Kal-El',
		first_appearance: 'Action Comics #1',
		weight: '220'
	},
	{
		name: 'Flash',
		publisher: 'DC Comics',
		alter_ego: 'Jay Garrick',
		first_appearance: 'Flash Comics #1',
		weight: '195'
	},
	{
		name: 'Green Lantern',
		publisher: 'DC Comics',
		alter_ego: 'Alan Scott',
		first_appearance: 'All-American Comics #16',
		weight: '186'
	},
	{
		name: 'Green Arrow',
		publisher: 'DC Comics',
		alter_ego: 'Oliver Queen',
		first_appearance: 'All-American Comics #16',
		weight: '195'
	},
	{
		name: 'Wonder Woman',
		publisher: 'DC Comics',
		alter_ego: 'Princess Diana',
		first_appearance: 'The Incredible Hulk #180',
		weight: '165'
	},
	{
		name: 'Blue Beetle',
		publisher: 'DC Comics',
		alter_ego: 'Dan Garret',
		first_appearance: 'Mystery Men Comics #1',
		weight: '145'
	},
	{
		name: 'Spider Man',
		publisher: 'Marvel Comics',
		alter_ego: 'Peter Parker',
		first_appearance: 'Amazing Fantasy #15',
		weight: '167'
	},
	{
		name: 'Captain America',
		publisher: 'Marvel Comics',
		alter_ego: 'Steve Rogers',
		first_appearance: 'Captain America Comics #1',
		weight: '220'
	},
	{
		name: 'Iron Man',
		publisher: 'Marvel Comics',
		alter_ego: 'Tony Stark',
		first_appearance: 'Tales of Suspense #39',
		weight: '250'
	},
	{
		name: 'Thor',
		publisher: 'Marvel Comics',
		alter_ego: 'Thor Odinson',
		first_appearance: 'Journey into Myster #83',
		weight: '200'
	},
	{
		name: 'Hulk',
		publisher: 'Marvel Comics',
		alter_ego: 'Bruce Banner',
		first_appearance: 'The Incredible Hulk #1',
		weight: '1400'
	},
	{
		name: 'Wolverine',
		publisher: 'Marvel Comics',
		alter_ego: 'James Howlett',
		first_appearance: 'The Incredible Hulk #180',
		weight: '200'
	},
	{
		name: 'Daredevil',
		publisher: 'Marvel Comics',
		alter_ego: 'Matthew Michael Murdock',
		first_appearance: 'Daredevil #1',
		weight: '200'
	},
	{
		name: 'Silver Surfer',
		publisher: 'Marvel Comics',
		alter_ego: 'Norrin Radd',
		first_appearance: 'The Fantastic Four #48',
		weight: 'unknown'
	}
];

//1.
const superHeroName = superheroes.map(heroSpecs => heroSpecs.name);
console.log(superHeroName);

//2.
const superHeroWeightLow = superheroes.filter(heroWeight => {
	return heroWeight.weight < 190;
});
console.log(superHeroWeightLow);
//3.
const superHeroWeight200 = superheroes
	.filter(heroWeight => {
		return heroWeight.weight == 200;
	})
	.map(heroSpecs => heroSpecs.name);

console.log(superHeroName);
console.log(superHeroWeight200);
//4.
const firstAppearance = superheroes.map(
	heroSpecs => heroSpecs.first_appearance
);
console.log(firstAppearance);

//5.
/* let marvelComics = [];
let dcComics = [];
const universe = superheroes.map(heroSpecs => heroSpecs.publisher);
if (universe === 'Marvel Comics')
if (universe === 'DC Comics') dcComics;

console.log(marvelComics);
console.log(dcComics); */

const marvelComicSucks = superheroes
	.filter(pub => pub.publisher == 'DC Comics')
	.map(heroSpecs => heroSpecs.name);

const dcComicsSucks = superheroes
	.filter(pub => pub.publisher == 'Marvel Comics')
	.map(heroSpecs => heroSpecs.name);

console.log(marvelComicSucks);
console.log(dcComicsSucks);

const totalWeightOffDc = superheroes
	.filter(specs => specs.publisher === 'DC Comics')
	.map(heroSpecs => parseInt(heroSpecs.weight))
	.reduce((sum, current) => sum + current);

console.log(totalWeightOffDc);

//7

const totalWeightOffmarvel = superheroes
	.filter(specs => specs.publisher === 'Marvel Comics')
	.filter(specs => specs.weight !== 'unknown')
	.map(specs => parseInt(specs.weight))
	.reduce((sum, current) => sum + current, 0);

console.log(totalWeightOffmarvel);

//8

const whoIsFat = superheroes
	.map(specs => specs.weight)
	.reduce(
		previous,
		current => {
			return previous > current ? current : previous;
		},
		0
	);

//.map(specs => specs.name);

console.log(whoIsFat);
