let enrollments = []

const getAll = () => {
    return enrollments
}

const insert = (enrollment) => {
    enrollments.push(enrollment)
}

const findOne = (id) => {
    return enrollments.find( x => x.id === id )
}

const EnrollmentRepository = { getAll, insert, findOne }

export default EnrollmentRepository