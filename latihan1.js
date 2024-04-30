// Kelas pertama
class Parent1 {
  method1() {
    console.log("Method 1 from Parent 1");
  }
}

// Kelas kedua
class Parent2 {
  method2() {
    console.log("Method 2 from Parent 2");
  }
}

// Kelas anak yang menggunakan komposisi atau mixin
class Child extends Parent1 {
  constructor() {
    super();
    this.parent2 = new Parent2();
  }

  method3() {
    console.log("Method 3 from Child");
  }

  methodFromParent2() {
    this.parent2.method2();
  }
}

const child = new Child();
child.method1(); // Output: Method 1 from Parent 1
child.method3(); // Output: Method 3 from Child
child.methodFromParent2(); // Output: Method 2 from Parent 2
