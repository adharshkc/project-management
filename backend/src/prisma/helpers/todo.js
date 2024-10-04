const {PrismaClient, PrismaClient} = require("@prisma/client")
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
        
    }
}

module.exports ={addTodo}
