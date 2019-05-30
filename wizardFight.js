class Combatant {
  constructor(combatantProps) {
    this.name = combatantProps.name;
    this.pronoun = combatantProps.pronoun;
    this.startingHealth = 100;
    this.armor = combatantProps.armor;
    this.weapon = combatantProps.weapon;
    this.bigAttack = combatantProps.bigAttack;
    this.mediumAttack = combatantProps.mediumAttack;
    this.smallAttack = combatantProps.smallAttack;
    this.currentAttack = combatantProps.smallAttack;
  }

  announce() {
    console.log(
      `${this.name} the ${this.subCombatClass} ${
        this.combatClass
      } stands ready in ${this.pronoun} ${this.armor}, brandishing ${
        this.pronoun
      } ${this.weapon}.`
    );
  }

  attack() {
    let attackRoll = Math.floor(Math.random() * 100) + 1;
    let damageRoll = Math.floor(Math.random() * 100) + 1;
    let damage = 0;
    if (attackRoll < 61) {
      this.currentAttack = this.smallAttack;
      damage = Math.ceil(damageRoll / 10);
    } else if (attackRoll < 91) {
      this.currentAttack = this.mediumAttack;
      damage = Math.ceil(damageRoll / 5);
    } else {
      this.currentAttack = this.bigAttack;
      damage = Math.ceil(damageRoll / 2);
    }

    console.log(
      `${this.name} ${this.verb} ${
        this.currentAttack
      } and it does ${damage} damage!`
    );

    return damage;
  }
}

function attackSize() {
  let attackRoll = Math.floor(Math.random() * 100) + 1;
  let size = undefined;
  if (attackRoll < 61) {
    this.currentAttack = this.smallAttack;
  } else if (attackRoll < 91) {
    this.currentAttack = this.mediumAttack;
  } else {
    this.currentAttack = this.bigAttack;
  }
}

class Wizard extends Combatant {
  constructor(wizardProps) {
    super(wizardProps);
    this.combatClass = wizardProps.wizardType;
    this.subCombatClass = wizardProps.magicType;
    this.verb = "casts";
  }
}

class Warrior extends Combatant {
  constructor(warriorProps) {
    super(warriorProps);
    this.combatClass = warriorProps.warriorType;
    this.subCombatClass = warriorProps.combatStyle;
    this.verb = "connects with a";
  }
}

const ashiok = new Wizard({
  name: "Ashiok",
  pronoun: "his",
  wizardType: "Sorcerer",
  magicType: "Void",
  armor: "black hooded cloak",
  weapon: "clawed-hands",
  bigAttack: "soul swallow",
  mediumAttack: "shadow blade",
  smallAttack: "psychic dart"
});

const shiana = new Warrior({
  name: "Shiana",
  pronoun: "her",
  warriorType: "Berserker",
  combatStyle: "Swamp",
  armor: "basilisk leather",
  weapon: "mighty axe",
  bigAttack: "head chop",
  mediumAttack: "rib smash",
  smallAttack: "short swing"
});

// Choose Fighters
warriorA = shiana;
warriorB = ashiok;

warriorA.announce();
console.log("");
warriorB.announce();
console.log("");
while (warriorA.startingHealth > 0 && warriorB.startingHealth > 0) {
  warriorA.startingHealth -= warriorB.attack();
  console.log(`${warriorA.name} has ${warriorA.startingHealth} hp left!`);
  console.log("");
  warriorB.startingHealth -= warriorA.attack();
  console.log(`${warriorB.name} has ${warriorB.startingHealth} hp left!`);
  console.log("");
}

if (warriorA.startingHealth < 1 && warriorB.startingHealth < 1) {
  console.log("Both warriors have perished in combat!");
} else if (warriorA.startingHealth > 1) {
  console.log(`${warriorA.name} is victorious!`);
} else {
  console.log(`${warriorB.name} is Victorious!`);
}
