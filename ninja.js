// class Ninja {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//         this.speed = 3;
//         this.strength = 3;
//     }

class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed || 3;
        this.strength = strength || 3;
    }
    sayName() {
        console.log(this.name)
        return this;
    }
    showStats() {
        console.log(this.name + "'s health is " + this.health)
        console.log(this.name + "'s strength is " + this.strength)
        console.log(this.name + "'s speed is " + this.speed)
        return this;
    }
    drinkSake() {
        console.log("that sake was delicious, I feel strong! my health is now " + (this.health += 10));
        return this;
    }
}

const ninja1 = new Ninja("Donatello", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name, health, speed, strength);
        this.health = health || 200;
        this.speed = speed || 10;
        this.strength = strength || 10;
        this.wisdom = wisdom || 10;
    }
    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
