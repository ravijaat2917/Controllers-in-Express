const allStudent = (req, res) =>{
    res.send('All Student');
}

const deleteStudent = (req , res)=>{
    const {id} = req.params;
    console.log(id);
    if(id==10){
        res.send('This id is belong to Ravi,You cannot  delete this id.')
    }else{
    res.send(`Student Deleted ID : ${id}`);
    }
}

const updateStudent = (req,res) =>{
    res.send(`Student with id ${req.params.id} updated successfully...`)
}

export {allStudent , deleteStudent  ,updateStudent} ;