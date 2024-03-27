const middlewareCustom2 =(req,res,next)=>{
    let idCard = true;
    if(!idCard){
        res.status(401).json({message:"You cannot in"});
    }
    else{
        console.log(4);
        next();
        console.log(5);
    }
}

module.exports = middlewareCustom2