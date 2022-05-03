class Ninja {
    constructor(name, health, strength = 3, speed = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
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
