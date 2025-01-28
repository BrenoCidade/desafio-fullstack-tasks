import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

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
    @IsString()
    @IsIn(['pendente', 'concluida'], { message: 'O status deve ser "pendente" ou "concluida"' })
    status: 'pendente' | 'concluida' = 'pendente';
}
