import mongoose, { Document, Schema } from 'mongoose';

export interface IContract {
    id_contrato: string;
    contrato_numero: string;
    tipocontrato: string;
    codigo_atleta: string;
    nome: string;
    apelido: string;
    sexo: string;
    uf: string;
    codigo_clube: string;
    clube: string;
    data_publicacao: string;
    data_nascimento: string;
    data_inicio: string;
    data_termino: string;
}

export interface IContractModel extends IContract, Document {}

const ContractSchema: Schema = new Schema(
    {
        id_contrato: { type: String, required: false },
        contrato_numero: { type: String, required: false },
        tipocontrato: { type: String, required: false },
        codigo_atleta: { type: String, required: false },
        nome: { type: String, required: false },
        apelido: { type: String, required: false },
        sexo: { type: String, required: false },
        uf: { type: String, required: false },
        codigo_clube: { type: String, required: false },
        clube: { type: String, required: false },
        data_publicacao: { type: String, required: false },
        data_nascimento: { type: String, required: false },
        data_inicio: { type: String, required: false },
        data_termino: { type: String, required: false }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IContractModel>('contracts', ContractSchema);
