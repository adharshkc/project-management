const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()


async function addTodo(name, projectId) {
    try {
        const newTodo = await prisma.todo.create({
            data:{
                name:name,
                projectId:projectId
            }
        })
        return newTodo
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

async function findTodos(projectId) {
    try {
        const todos = await prisma.todo.findMany({
            where:{
                projectId:projectId
            }
        })
        return todos
    } catch (error) {
        console.log(error)
    }
}

module.exports ={addTodo, findTodos}
