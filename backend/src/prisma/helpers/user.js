const {PrismaClient }= require('@prisma/client')

const prisma = new PrismaClient()

async function user(name, email, password){
    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })
    return newUser
}

module.exports = user