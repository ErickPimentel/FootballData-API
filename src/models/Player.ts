import mongoose, { Document, Schema } from 'mongoose';

export interface IPlayer {
    codigo_atleta: string;
    nome: string;
    apelido: string;
    sexo: string;
    data_nascimento: string;
}

export interface IPlayerModel extends IPlayer, Document {}

const PlayerSchema: Schema = new Schema(
    {
        codigo_atleta: { type: String, required: false },
        nome: { type: String, required: false },
        apelido: { type: String, required: false },
        sexo: { type: String, required: false },
        data_nascimento: { type: String, required: false }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IPlayerModel>('contracts', PlayerSchema);
