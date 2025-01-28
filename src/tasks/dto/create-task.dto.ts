import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsIn, IsNotEmpty, IsString } from 'class-validator'

export class CreateTaskDto {
    @ApiProperty({
        description: 'Titulo da task',
        example: 'Jogar bola',
    })
    @IsNotEmpty({ message: 'O campo title não pode estar vazio' })
    @Transform(({ value }) => value.trim())
    title: string;

    @ApiProperty({
        description: 'Descrição da task',
        example: 'Irei jogar bola com meus amigos',
    })
    @IsString()
    description: string;

    @ApiProperty({
        description: 'Status da task',
        example: 'pendente',
    })
    @IsString()
    @IsIn(['pendente', 'concluida'], { message: 'O status deve ser "pendente" ou "concluida"' })
    @Transform(({ value }) => value.toLowerCase())
    status: 'pendente' | 'concluida' = 'pendente';
}
