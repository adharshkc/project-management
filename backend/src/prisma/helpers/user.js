const {PrismaClient }= require('@prisma/client')

const prisma = new PrismaClient()

async function createUser(name, email, password){
    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })
    return newUser
}

async function findUserByEmail(email){
   try {
     const user = await prisma.user.findUnique({
         where:{
             email:email
         }
     })
     return user
   } catch (error) {
    console.log(error)
   }
}

module.exports = {createUser, findUserByEmail}