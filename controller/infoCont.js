const {info}=require('../model/infoM');


exports.getInfoCont = async (req, res) => {
  try{
    const Info= await info.find();
    res.json(Info);
  }catch(err){
    console.log(err)
  }
};

exports.getPartOfInfoCont=async(req,res)=>{
  try{
    const Info= await info.find({status:req.params.id}).exec();
    res.json(Info)
  }catch(err){
   console.log(err)
   res.json(err)
  }

}
