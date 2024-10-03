const {createUser, findUserByEmail} = require("../prisma/helpers/user");
const bcrypt = require('bcrypt');
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
 try {
  const encryptedPassword = await bcrypt.hash(password, 10)
   const newUser = await createUser(name, email, encryptedPassword)
   const token = await generateToken(newUser.id)
   res.status(200).json({data:{newUser, token, success:true}});
 } catch (error) {
  res.status(400).json("something went wrong")
 }
};

const loginUser = async (req, res)=>{
  const {email, password} = req.body;
  console.log(email, password)
  try {
    const user = await findUserByEmail(email)
    console.log(user)
    if(user){
      const comparePassword = await bcrypt.compare(password, user.password)
      if(comparePassword){
        const token = generateToken(user.id)
        res.status(200).json({data:{user, token,  success:true}})
      }else{
        res.status(401).json({data:{message:"password is incorrect"}})
      }
    }else{
      res.status(401).json({data:{message:"email not found .."}})

    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { registerUser, loginUser };
