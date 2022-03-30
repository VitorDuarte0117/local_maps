import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Store {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar")
    name: string;

    @Column("varchar")
    description: string;

    @Column("varchar")
    category: string;

    @Column("varchar")
    contacts: string;

    @Column("double precision")
    latitude: number;

    @Column("double precision")
    longitude: number;
}
