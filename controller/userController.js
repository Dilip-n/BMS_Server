const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const createUser = async(req,res)=>{
    try {

        const email = req.body.email;
        const userExists = await userModel.findOne({email})
        if(userExists){
          return  res.status(200).json({success:false, message:'User already Exist'})  
        }
        const newUser = new userModel(req.body);
        await newUser.save();
        return res.status(200).json({success:true, message:'User registered successfully, Please Login'})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error})
    }
}
const userLogin = async(req,res)=>{
    try {
        const email = req.body.email;
      
        const userExists = await userModel.findOne({email})
        if(!userExists){
          return  res.status(400).json({success:false, message:'No User found'})  
        }
        if(userExists.password !== req.body.password){
            return  res.status(400).json({success:false, message:'email or password is incorrect'}) 
        }     

        const token = jwt.sign({
            userId: userExists._id
        },process.env.JWT_SECRATE?process.env.JWT_SECRATE:"JioMovie@1234",{expiresIn:"1d"});

        // res.cookie('token', token, {
        //     httpOnly: true,       // Prevents JavaScript from accessing the cookie (for security)
        //     secure: true,         // Ensures the cookie is only sent over HTTPS
        //     maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        //     sameSite: 'Strict',   // Protects against CSRF attacks
        //     path: '/',            // Cookie will be available across the entire site
        // });
        
        return res.status(200).json({success:true, message:'User logged in successfully',data : token})
        
    } catch (error) {       
        res.status(400).json({message:error})
    }
}
const getCurrentUser = async(req,res) =>{
    try {
        console.log(req.body)
         console.log("here","123")

         const user  = await userModel.findById(req.body.userId).select("-password");
         console.log(user,"here");
         res.send({
            success:true,
            message:"you are authorized to go to the protected route",
            data: user
         })
        //  const token = req.cookies.token;
        // console.log(token)
        // res.send({success:true,message:"You are authorised successfully"})
        
    } catch (error) {
        res.status(400).json({message:error})
    }
}
const logOutUser = async (req, res) => {
    try {
        // localStorage.removeItem('token');
    res.status(200).send({success:true, message: 'Logged out successfully' });
    } catch (error) {
        res.status(400).json({message:error}) 
    }
    
  }

module.exports = {
    createUser,
    userLogin,
    getCurrentUser,
    logOutUser
};