const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addProject(name, userId) {
  try {
    const newProject = await prisma.project.create({
      data: {
        name: name,
        userId: userId,
      },
    });
    return newProject;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

async function findProject(userId) {
  try {
    console.log(userId);
    const projects = await prisma.project.findMany({
      where: { userId: userId },
      include:{todos:true}
    });

    console.log(projects);
    return projects;
  } catch (error) {
    console.log(error);
  }
}

async function findProjectById(projectId) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include:{todos:true}
    });
    console.log(project)
    return project;
  } catch (error) {
    console.log(error);
  }
}
async function updateName(name,projectId) {
  try {
    const project = await prisma.project.update({
      where: { id: projectId },
      data:{
        name:name
      }
    });
    console.log(project)
    return project;
  } catch (error) {
    console.log(error);
  }
}



module.exports = { addProject, findProject, findProjectById ,updateName};
