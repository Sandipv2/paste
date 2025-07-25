import mongoose from "mongoose";
import { Paste } from "../models/paste.model.js";
import { User } from "../models/user.model.js";

export const create = async (req, res) => {
  try {
    const userId = req.userId;
    const { title, content } = req.body;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "Not authenticated" });
    }

    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Not authenticated" });
    }

    const paste = new Paste({
      user: userId,
      title,
      content,
    });
    await paste.save();

    res.status(201).json({
      success: true,
      message: "Paste is created",
      paste: paste._doc,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const userId = req.userId;
    const { pasteId } = req.params;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "Not authenticated" });
    }

    if (!pasteId) {
      return res
        .status(400)
        .json({ success: false, message: "Title and content are required" });
    }

    const paste = await Paste.findById(pasteId);
    if (!paste) {
      return res
        .status(400)
        .json({ success: false, message: "Paste not found" });
    }

    // Checking ownership
    if (paste.user.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this paste",
      });
    }

    await Paste.findByIdAndDelete(pasteId);

    res
      .status(200)
      .json({ success: true, messsage: "Paste deleted successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const userId = req.userId;
    const { title, content } = req.body;
    const { pasteId } = req.params;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "Not authenticated" });
    }

    if (!mongoose.Types.ObjectId.isValid(pasteId)) {
      res.status(400).json({ success: false, message: "Paste not found" });
    }

    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }

    const paste = await Paste.findById(pasteId);

    if (!paste) {
      res.status(400).json({ success: false, message: "Paste not found" });
    }

    paste.title = title;
    paste.content = content;
    await paste.save();

    res.status(200).json({
      success: true,
      message: "Paste updated successfully",
      paste: {
        ...paste._doc,
      },
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getPastes = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "Not authenticated" });
    }

    const pastes = await Paste.find({ user: userId });

    res.status(200).json({ success: true, data: pastes });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getOnePaste = async (req, res) => {
  try {
    const { pasteId } = req.params;

    if (!pasteId) {
      return res
        .status(400)
        .json({ success: false, message: "pasteId missing" });
    }

    const paste = await Paste.findById(pasteId);
    if (!paste) {
      return res
        .status(400)
        .json({ success: false, message: "Paste not found" });
    }

    const user = await User.findById(paste.user).select("name");

    res
      .status(200)
      .json({ success: true, data: { ...paste._doc, name: user.name } });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
