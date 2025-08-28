import mongoose from 'mongoose';
const { Schema } = mongoose;

const templateSchema = new Schema({
  type: {type: String, default: 'welcome'},
  content: String,
  labels: [{ label: String}],
  author: String,
  createdAt: { type: Date, default: Date.now }
});

// Crear índice después de la definición del schema
templateSchema.index({ type: 1 }); // 1 = ascendente, -1 = descendente

export const Templates = mongoose.model('Templates', templateSchema, 'templates');

export async function checkIndexes() {
    try {
        const indexes = await Templates.collection.getIndexes();
        console.log('Índices existentes:', indexes);
    } catch (error) {
        console.error('Error verificando índices:', error);
    }
}
