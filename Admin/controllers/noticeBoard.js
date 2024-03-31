const noticeBoard = (req,res)=>{
    res.json({msg:"This is notice borad "});
}

const addNotice = (req,res)=>{
    // console.log(req.body);
    res.json({msg:`Adding notice to the notice borad `,text:`${req.body.text}`});
}

const deleteNotice =(req,res)=>{
    res.json({msg:`Deleting notice from the notice borad with notice id ${req.body.id} `});
}

module.exports ={noticeBoard,addNotice,deleteNotice}
