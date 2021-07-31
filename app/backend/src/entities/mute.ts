import { Entity, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Mute{
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	channel_id: number;
	@Column()
	user_id: string;
	@CreateDateColumn()
	createdAt: Date;
}