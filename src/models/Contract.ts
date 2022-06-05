import mongoose, { Document, Schema } from 'mongoose';

export interface IContract {
    name: string;
}

export interface IContractModel extends IContract, Document {}

const ContractSchema: Schema = new Schema(
    {
        name: { type: String, required: false }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IContractModel>('contracts', ContractSchema);
