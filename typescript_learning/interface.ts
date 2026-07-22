interface Computer {
  computerName: string;
  ram: number;
  ssd: number;
}

const computerExample: Computer = {
  computerName: "Hp EliteBook 840 G3",
  ram: 16,
  ssd: 256,
};

// Object Destructuring to get individual values
const { computerName, ram, ssd } = computerExample;

console.log(`
Computer Specs:
name: ${computerName}
ram: ${ram}
ssd: ${ssd}`);
