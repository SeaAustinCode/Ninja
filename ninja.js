class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.name + "'s health is " + this.health)
        console.log(this.name + "'s strength is " + this.strength)
        console.log(this.name + "'s speed is " + this.speed)
    }
    drinkSake() {
        console.log("that sake was delicious, I feel strong! my health is now " + (this.health += 10));
    }
}

const ninja1 = new Ninja("Donatello", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
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
