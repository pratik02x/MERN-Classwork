const express = require("express")
const pool = require("../db/pool")
const result = require("../utils/result")
const { error } = require("node:console")

const router = express.Router()

router.get("/", (req, res) => {
    const sql = `SELECT * FROM student`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.post("/", (request, response) => {
    
    const { name, email, course } = request.body
    const sql = `INSERT INTO student(name,email,course) VALUES(?,?,?)`
    pool.query(sql, [name, email, course], (error, data) => {
        response.send(result.createResult(error, data))
    })

})

router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    const sql=`DELETE FROM student WHERE id=?`;
    pool.query(sql,[id],(error,data)=>{
        res.send(result.createResult(error,data));
    })
})

// router.put()
// router.delete()

module.exports = router