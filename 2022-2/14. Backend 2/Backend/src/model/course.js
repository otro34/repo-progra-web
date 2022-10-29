class Course {
    constructor(course) {
        if (!course) return

        this.id = course.id,
        this.programId = course.programId,
        this.name = course.name
    }
}

export default Course