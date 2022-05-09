class Student {
	public roll: number;
	protected name: string;
	constructor(code: number, name: string) {
		this.roll = code;
		this.name = name;
	}
}
class Person extends Student {
	private dept: string;

	constructor(code: number, name: string, dept: string) {
		super(code, name);
		this.dept = dept;
	}
	public getIntro() {
		return `Hello! I am ${this.name} from ${this.dept} department and my roll number is ${this.roll}.`;
	}
}

// The format of the parameters: (roll number, 'name', 'department')
const me: Person = new Person(21, 'Your Name Here', 'IT');
console.log(me.getIntro());
