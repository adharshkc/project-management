const { addProject, findProject , findProjectById} = require("../prisma/helpers/project");

const createProject = async (req, res) => {
  const { projectName } = req.body;
  console.log(req.body)
  const userId = req.user.userId;
  try {
    const result = await addProject(projectName, userId);
    return res.status(200).json({ result, message: "success" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getProjects = async (req, res) => {
  const userId = req.user.userId;
  console.log(userId)
  try {
    const result = await findProject(userId);
    console.log(result)
     setTimeout(()=>res.status(200).json({ result, message: "success" }), 3000);
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error });
  }
};

const getSingleProject = async (req, res)=>{
  const projectId = req.params.projectId;
  console.log(projectId)
  try {
    const result = await findProjectById(parseInt(projectId))
    return res.status(200).json({result})
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = { createProject, getProjects , getSingleProject};
