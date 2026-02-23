 import bookModel from "../model/bookmodel.js";
const postbook = async (req, res) => {
  try {
    let { title, author, publishyear } = req.body;
    if (!title && !author && !publishyear) {
      return res.status(400).send({ error: "fill all required fields" });
    } else {
      let booktitle = await bookModel.findOne({ title });
      if (booktitle) {
        return res
          .status(400)
          .send({ message:  `Book already exists` });
      } else {
        let data = await bookModel({title,author,publishyear});//req.body
        await data.save();
        return res.status(201).send({ message: "Data saved" });
      }
    }
  } catch (error) {
    return res
      .status(400)
      .send({ error: "internal error", msg: error.message });
  }
};
let getbooks = async (req, res) => {
  try {
    let datas = await bookModel.find();
    return res.status(201).send({ count: datas.length, allbooks: datas });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "internal server error", msg: error.message });
  }
};
let getonebook = async (req, res) => {
  try {
    let { id } = req.params;
    
    let data = await bookModel.findById(id)
    
    if (data) {
      return res.status(200).send({ message: data });
    } else {
      return res.status(400).send({ message: "Book not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ error: "internal server error", msg: error.message });
  }
};
let updatebook = async (req, res) => {
  try {
    let { title, author, publishyear } = req.body;
    if (!title && !author && !publishyear) {
      return res.status(400).send({ err: "fill all required fields" });
    } else {
      
      let { id } = req.params;
      let data=await bookModel.findById(id)
      if(data){
        let updatedata = await bookModel.updateOne({_id:data._id},{$set:{...req.body}})
        if (updatedata) {
          return res.status(201).send({ message: "Book updated" });
        } else {
          return res.status(400).send({ message: "Book not found" });
        }
    }else{
      return res.status(400).send({ message: "Id not found" });
    }
  }
  } catch (error) {
    return res
      .status(500)
      .send({ error: "internal server error", msg: error.message });
  }
};
let deletebook=async(req,res)=>{
  try {
    let {id}=req.params
    let data=await bookModel.findById(id)
    if(data){
      let deletedata=await bookModel.deleteOne({_id:data._id})
      if(deletedata){
        return res.status(201).send({message:"Book deleted"})
      }else{
        return res.status(201).send({message:"Book not found"})
      }
     
    }else{
      return res.status(201).send({message:"ID not found"})
    }
  } catch (error) {
    return res.status(500)
    .send({ error: "internal server error", msg: error.message });
  }
 
}
export { postbook, getbooks, getonebook ,updatebook,deletebook};
