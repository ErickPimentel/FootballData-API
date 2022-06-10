import mongoose, { Document, Schema } from 'mongoose';

export interface IGame {}

export interface IGameModel extends IGame, Document {}

const GameSchema: Schema = new Schema(
    {},
    {
        versionKey: false
    }
);

export default mongoose.model<IGameModel>('games', GameSchema);
