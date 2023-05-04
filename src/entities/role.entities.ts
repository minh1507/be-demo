import { Table, Model, Column, DataType, HasOne } from "sequelize-typescript";
import { Optional } from "sequelize";
import { User } from "./user.entities.ts";

interface RoleAttributes {
  id: number;
  name: string;
  note: string;
}
interface RoleCreationAttributes extends Optional<RoleAttributes, "id"> {}
type UserType = typeof User
@Table({
  timestamps: false,
  tableName: "roles",
})
export class Role extends Model<RoleAttributes, RoleCreationAttributes> {
  @HasOne(() => User, "roleId")
  user!: UserType;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  note!: string;
}
