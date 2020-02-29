const Tool = require('../models/Tool');

module.exports = {
    async index(req, res){
        const {tag} = req.query;
        
        if(!tag){
            const tools = await Tool.find();
            return res.json(tools);
        } else {
            const tools = await Tool.find({ tags: tag })
            return res.json(tools)
        }

    },
    async store(req, res) {
       const {title, link, desc, tags} = req.body;

       const alreadyExists = await Tool.findOne({title})

       if(alreadyExists) {
           return res.status(400).json({error: "This title already exists, please try another"})
       }
       
       const newTool = await Tool.create({
           title,
           link,
           desc,
           tags,
       })

       return res.json(newTool)
    },
    async delete(req, res){
        const {id} = req.params
        const tool = await Tool.findOne({_id: id})
        
        if(!tool) {
            return res.status(401).json({error: "Id not found"})
        }

        const del = await Tool.deleteOne(tool)

        return res.json({Response: "The tool has been successfully deleted"})
    }
}