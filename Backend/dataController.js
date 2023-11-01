const  ProjectModel = require('./dataModel')
const fs = require('fs')

async function demoData(req,res) {
    try {
        const data = await ProjectModel.find({})
        // const jsonData = JSON.stringify(data);
        // fs.writeFileSync('./jsonFile.txt', jsonData)
        return res.status(200).json({data});
    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({ status: false, msg: 'Internal Server Error!!' });
    }
}

module.exports = demoData