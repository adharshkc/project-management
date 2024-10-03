const {createUser, findUserByEmail} = require("../prisma/helpers/user");
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
 try {
  const encryptedPassword = await bcrypt.hash(password, 10)
   const newUser = await createUser(name, email, encryptedPassword)
   res.status(200).json(newUser);
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
        res.status(200).json({data:{user, success:true}})
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
