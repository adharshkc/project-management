const { addTodo, findTodos, todoDelete, todoComplete } = require("../prisma/helpers/todo")



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

const deleteTodo = async(req, res)=>{
    const todoId = req.params.todoId
    try {
        const result = await todoDelete(parseInt(todoId))
        console.log(result)
        return res.status(200).json({result, message:"success"})

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error });
    }
}

const completeTodo = async (req, res)=>{
    const todoId = req.body.todoId
    console.log(todoId)
    try {
        const result = await todoComplete(parseInt(todoId))
        console.log(result)
        return res.status(200).json({result, message:"success"})
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error });
    }
    
}

module.exports = {createTodo, getTodos, deleteTodo, completeTodo}