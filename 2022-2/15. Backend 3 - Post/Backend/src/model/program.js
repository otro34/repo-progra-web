class Program {
    constructor(program) {
        if (!program) return

        this.id = program.id,
        this.name = program.name,
        this.facultyId = program.facultyId
    }
}

export default Program