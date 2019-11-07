# ES5写法

1. 基本

   ```javascript
   function User(name, age) {
       console.log(this);
       this.name = name;
       this.age = age;
   }
   User.prototype.getDoubleAge = function() {
       console.log(this);
       return this.age * 2;
   };
   
   let u1 = new User('kk', 18); //this->User实例
   u1.color = 'red';
   
   User //f User(name,age)
   u1 // User实例
   
   u1.__proto__ === User.prototype //true
   User.__proto__ === Function.prototype //true
   Object.__proto__ === Function.prototype //true
   
   u1.name //kk
   u1.age //18
   console.log(u1.getDoubleAge()); //this->User实例 36
   ```

   ```javascript
   for (const k in u1) {
       console.log(k); //name age color getDoubleAge
   }
   ```

2. 继承

   ```javascript
   function VipUser(name, age, level) {
       User.call(this, name, age);
       this.level = level;
   }
   VipUser.prototype = u1;
   VipUser.prototype.constructor = VipUser;
   
   let u2 = new VipUser('hua', 24, 6); //this -> VipUser实例
   u2.name //hua
   u2.age //24
   u2.color //red
   u2.getDoubleAge() //this -> VipUser实例 48
   u2.level //6
   ```

   ```javascript
   for (const k in u2) {
       console.log(k); //name age level color constructor getDoubleAge
   }
   ```

   