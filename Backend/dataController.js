const  ProjectModel = require('./dataModel')
async function demoData(req,res) {
    try {
        const data = await ProjectModel.find({})
        return res.status(200).json({data});
    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}

module.exports = demoData