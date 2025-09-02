import prisma from "../lib/db.js"

export async function getAllContacts(req, res) {
    try {


        const contacts = await prisma.contact.findMany({
            where: {
                id: {
                    'gt': 2
                }
            },
            orderBy: [
                {
                    createdAt: 'desc',
                }
            ],
        })
        
        return res.json({ contacts: contacts });
    } catch (error) {
        return res.status(500);
    }
}