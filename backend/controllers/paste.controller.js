import { Paste } from "../models/paste.model.js";
import { User } from "../models/user.model.js";

export const create = async (req, res) => {
    try {
        const userId = req.userId;
        const {title, content} = req.body;

        if(!userId) {
            return res.status(400).json({success: false, message: 'Not authenticated'});
        }

        if(!title || !content) {
            return res.status(400).json({success: false, message: 'Title and content are required'});
        }

        const user = await User.findById(userId);
        if(!user) {
            return res.status(400).json({success: false, message: 'Not authenticated'});
        }

        const paste = new Paste({
            user: userId,
            title, 
            content,
        })
        await paste.save();

        res.status(201).json({success: true, message: 'Paste is created'})


    } catch(err) {
        res.status(400).json({success: false, message: err.message});
    }
}