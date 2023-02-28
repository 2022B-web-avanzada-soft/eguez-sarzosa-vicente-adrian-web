import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {NotaEntity} from "./nota.entity";

@Injectable()
export class NotaService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {}
    public notaRepository = this.datasource
        .getRepository(NotaEntity);
}