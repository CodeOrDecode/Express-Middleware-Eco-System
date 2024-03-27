const middlewareCustom1 =(req,res,next)=>{
    let idCard = true;
    if(!idCard){
        res.status(401).json({message:"You cannot in"});
    }
    else{
        console.log(1);
        next();
        console.log(2);
    }
}

module.exports = middlewareCustom1