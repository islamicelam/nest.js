import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {}
    async createUser (dto: CreateUserDto) {
        console.log(dto);
        // const user = await this.userRepository.create(dto);
        const user = await this.userRepository.create(dto)
        const role = await this.roleService.getRoleByValue('USER');
        console.log(role);
        await user.$set('roles', [role.id]);
        user.roles = [role]
        return user;
    }

    async getAllUsers () {
        return await this.userRepository.findAll({ include: { all: true } });
    }

    async getUsersByEmail (email: string) {
        return await this.userRepository.findOne({ where: { email }, include: { all: true } });
    }
}
