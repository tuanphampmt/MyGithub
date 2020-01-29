class General {
    name: string;
    desc: string;
    skill: string[];

    constructor(name: string, desc: string, skill: string[]) {
        this.name = name;
        this.desc = desc;
        this.skill = skill;
    }
    show(): void{
        console.log(`Name: ${this.name}, Description: ${this.desc}, Skill: ${this.skill}`)
    }
}

class Assassins extends General {
    beam: String
    constructor(name: string, desc: string, skill: string[], beam: string) {
        super(name, desc, skill)
        this.beam = beam
    }
    run(): void {
        super.show()
        console.log(`Đồn sát thủ: ${this.beam}`)
    }
}
const assassins = new Assassins("Nakarot", "Sat thủ đẫm máu", ["chém", "đấm", "đá"], "Chặt")
assassins.run()