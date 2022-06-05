import mongoose, { Document, Schema } from 'mongoose';

export interface IAthlete {
    idAthlete: string;
}

export interface IAthleteModel extends IAthlete, Document {}

const AthleteSchema: Schema = new Schema(
    {
        idAthlete: { type: String, required: false }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IAthleteModel>('bids', AthleteSchema);
