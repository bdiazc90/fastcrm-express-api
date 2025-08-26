import { Templates } from "../models/templateModel.js";

export async function getAllTemplates(req, res) {
    try {
        const templates = await Templates.find({});
        res.status(200).json(templates);
    } catch (e) {
        console.error(e);
    }
}

export async function createTemplate(req, res) {
    console.log("llegó a createTemplate");
    return;
    const { content, author } = req.body;
    const newTemplate = new Templates.create({
        content: content,
        author: author
    })
    return res.status(201).json({template: newTemplate});
}