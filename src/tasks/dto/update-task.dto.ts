import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @ApiProperty({
        description: 'Titulo da task',
        example: 'Jogar bola',
    })
    @IsString()
    @IsOptional()
    title: string;

    @ApiProperty({
        description: 'Descrição da task',
        example: 'Irei jogar bola com meus amigos',
    })
    @IsOptional()
    @IsString()
    description: string;

    @ApiProperty({
        description: 'Status da task',
        example: 'pendente',
    })
    @IsOptional()
    @IsBoolean()
    status: boolean;
}
