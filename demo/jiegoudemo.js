const o = { p: 42, q: true }
const { p: foo, q: bar } = o

const people = {
	name: 'chen',
	age: 10,
}

const { name: thename, age: theage } = people

console.log(thename, theage)
