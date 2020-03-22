import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class uiView {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}