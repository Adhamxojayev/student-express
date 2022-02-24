
const GET =  `
    select 
        *
    from students
`

const ADD = `
    insert into students
    (first_name, last_name, age)
    values ($1, $2, $3)
    returning *
`

const PUT = `
    update students
    set first_name = $1,
        last_name = $2,
        age = $3
    where student_id = $4
    returning *    
`

const DELETE = `
    delete from students where student_id = $1
    returning *
`


module.exports = {
    GET,
    ADD,
    PUT,
    DELETE
}
