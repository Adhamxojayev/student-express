const modul = require('./modul.js')


const GET = async (req,res) => {
    try {
        let student = await modul.GET_STUDENT()
        if(student) {
            res.status(200).json({status: 200, message: student})
        }else{
            res.status(404).json({status: 404, message: false})
        }
    } catch (error) {
        console.log(error);
    }
}


const POST = async (req,res) => {
    try {
        
        let student = await modul.ADD_STUDENT(req.body)
        if(student) {
            res.status(201).json({status: 201, message: 'student added'})
        }else{
            res.status(404).json({status: 404, message: false})
        }
    } catch (error) {
        console.log(error);
    }
}

const PUT = async (req,res) => {
    try {

        let student = await modul.PUT_STUDENT(req.body)
        if(student) {
            res.status(202).json({status: 202, message: 'student updated'})
        }else{
            res.status(404).json({status: 404, message: false})
        }
    } catch (error) {
        console.log(error);
    }
}



const DELETE = async (req,res) => {
    try {

        let student = await modul.DELETE_STUDENT(req.body)
        if(student) {
            res.status(202).json({status: 202, message: 'student deleted'})
        }else{
            res.status(404).json({status: 404, message: false})
        }
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    GET,
    POST,
    PUT,
    DELETE
}