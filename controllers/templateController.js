import { Templates } from "../models/templateModel.js";

const ALLOWED_TYPES = ['welcome', 'followup', 'meet'];

export async function getAllTemplates(req, res) {
    try {
        const { q, type } = req.query;
        let query = {}
        if (q) query = {
            content: { $regex: q, $options: 'i' }
        }
        
        if (type) {
            // Convertir a lowercase para comparación case-insensitive
            const normalizedType = type.toLowerCase();

            if (!ALLOWED_TYPES.includes(normalizedType)) {
                return res.status(400).json({
                    error: 'Invalid type parameter',
                    allowedValues: ALLOWED_TYPES
                });
            }
            query = { ...query, type: normalizedType };
        }
        const templates = await Templates.find(query);
        res.status(200).json(templates);
    } catch (e) {
        console.error(e);
    }
}

export async function createTemplate(req, res) {
    const { content, author, channel } = req.body;
    const newTemplate = await Templates.create({
        content: content,
        author: author,
        channel: channel
    });
    return res.status(201).json({ template: newTemplate });
}

export async function updateTemplate(req, res) {
    try {
        const { id } = req.params;
        console.log(id);
        const { content, author } = req.body;
        await Templates.updateOne({ _id: id }, { content: content, author: author });
        return res.status(204).json({ message: "Actualizado!" });
    } catch (e) {
        console.error(e);
    }
}