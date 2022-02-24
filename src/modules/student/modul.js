const { fetch, fetchAll } = require('../../lib/postgres.js')
const { GET, ADD, PUT, DELETE } = require('./query.js')

const GET_STUDENT = async () => {
    try {
        let student = await fetchAll(GET)
        return student

    } catch (error) {
        console.log(error);
    }
}


const ADD_STUDENT = async ( {firstName, lastName, age} ) => {
    try {
        let student = await fetch(ADD, firstName, lastName, age)
        return student

    } catch (error) {
        console.log(error);
    }
}


const PUT_STUDENT = async ( {studentId, firstName, lastName, age} ) => {
    try {
        let student = await fetch(PUT, firstName, lastName, age, studentId)
        return student

    } catch (error) {
        console.log(error);
    }
}

const DELETE_STUDENT = async ( { studentId } ) => {
    try {
        let student = await fetch(DELETE, studentId)
        return student

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    GET_STUDENT,
    ADD_STUDENT,
    PUT_STUDENT,
    DELETE_STUDENT
}
