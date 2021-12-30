import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'character varying',
    length: '25',
    nullable: false,
    unique: true,
  })
  login: string;

  @Column({ type: 'character varying', length: '25', nullable: false })
  firstName: string;

  @Column({ type: 'character varying', length: '25', nullable: true })
  lastName: string;

  @Column({
    type: 'character varying',
    length: '50',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({ type: 'character varying', length: '200', nullable: false })
  password: string;
}
