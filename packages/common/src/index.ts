/* eslint-disable no-restricted-syntax */

class MyClass {
  constructor() {
    this.helloWorld = this.helloWorld.bind(this);
  }

  helloWorld() {
    console.log('HelloWorld!');
  }
}
export default { MyClass };
