const {info}=require('../model/infoM');


exports.getInfoCont = async (req, res) => {
  try{
    const Info= await info.find();
    res.json(Info);
  }catch(err){
    console.log(err)
  }
  
  
};
