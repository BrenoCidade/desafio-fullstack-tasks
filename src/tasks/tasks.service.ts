import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Tasks } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) { }

  async create(createTaskDto: CreateTaskDto): Promise<Tasks> {
    const taskCreated = this.prisma.tasks.create({ data: createTaskDto })
    return taskCreated;
  }

  async findAll(): Promise<Tasks[]> {
    return this.prisma.tasks.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: number): Promise<Tasks> {
    const task = await this.prisma.tasks.findUnique({
      where: {
        id: id,
      },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Tasks> {
    const { title, description, status } = updateTaskDto;

    const task = await this.prisma.tasks.findUnique({
      where: {
        id: id,
      },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return this.prisma.tasks.update({
      where: {
        id: id,
      },
      data: { title, description, status },
    });
  }

  async delete(id: number) {
    const task = await this.prisma.tasks.findUnique({
      where: {
        id: id,
      },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return this.prisma.tasks.delete({
      where: {
        id: id
      },
    });


  }
}
