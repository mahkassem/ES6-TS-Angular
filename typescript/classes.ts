interface IPerson {
  name: string
  age: number
}

class Person implements IPerson {
  name: string
  age: number
  protected _secret: string

  constructor(name: string, age: number, secret: string) {
    this.name = name;
    this.age = age;
    this._secret = secret;
  }

  public set secret(secret: string) {
    this._secret = secret;
  }

  public get secret() {
    return this._secret;
  }

  public getFullName() {
    return this._secret;
  }
}

const person1 = new Person('Ahmed', 25, '1234');

person1.secret = '5678';

console.log(person1.secret)

// class Student extends Person {
//   className: string
//   greet: () => string

//   constructor(name: string, age: number, secret: string, className: string) {
//     super(name, age, secret);
//     this.className = className;
//     this.greet = () => 'Hello';
//   }

//   public getSecret() {
//     return this._secret;
//   }
// }