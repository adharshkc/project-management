const { addTodo, findTodos } = require("../prisma/helpers/todo")



const createTodo = async (req, res)=> {
    const projectId = req.params.projectId
    const {name} = req.body;
    if(!name)return res.status(401).json({message:"name is required"})
    try {
        const result = await addTodo(name, parseInt(projectId))
        return res.status(200).json({result, message:"success"})
    } catch (error) {
        return res.status(500).json({ error });
    }
}

const getTodos = async(req, res)=>{
    const projectId = req.params.projectId
    try {
        const result = await findTodos(parseInt(projectId))
        console.log(result)
        return res.status(200).json({result, message:"success"})

    } catch (error) {
        return res.status(500).json({ error });
    }
}

module.exports = {createTodo, getTodos}