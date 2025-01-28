import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody } from '@nestjs/swagger';
import { Tasks } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @ApiBody({
    type: CreateTaskDto,
    description: 'Objeto para criação da task',
  })
  @HttpCode(201)
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Tasks> {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll(): Promise<Tasks[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tasks> {
    return this.tasksService.findById(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<Tasks> {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @HttpCode(204)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tasksService.delete(+id);
  }
}
