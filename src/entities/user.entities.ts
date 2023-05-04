import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import { Role } from "./role.entities.ts";

interface UserAttributes {
  id: number;
  username: string;
  password: string;
  roleId: number;
  accessToken: string;
  refreshToken: string;
  date: Date
}
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}
type RoleType = typeof Role;

@Table({
  timestamps: false,
  tableName: "users",
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  username!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  password!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  accessToken!: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  date!: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  refreshToken!: string;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER, allowNull: false })
  roleId!: number;

  @BelongsTo(() => Role, "roleId")
  role!: RoleType;
}
