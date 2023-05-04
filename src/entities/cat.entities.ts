import { Table, Model, Column, DataType } from "sequelize-typescript";
import { Optional } from 'sequelize';

interface CatAttributes {
    id: number,
    name: string;
    fileUrl: string;
    age: number;
  }
  interface CatCreationAttributes extends Optional<CatAttributes, 'id'> {}

@Table({
    timestamps: false,
    tableName: "cats"
})

export class Cat extends Model<CatAttributes, CatCreationAttributes>{
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    name!: string;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    age!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    fileUrl!: string
}