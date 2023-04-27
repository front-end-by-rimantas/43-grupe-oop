class School {
    constructor(name) {
        this.name = name;
        this.students = [];
    }

    addStudent(name) {
        this.students.push(name);
        return `${this.name}: pridedu mokini "${name}".`;
    }

    description() {
        return `Sveiki, cia "${this.name}" mokykla, pas mus mokosi ${this.students.length} mokiniu.`;
    }
}

export { School };
