import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { TodosCategory } from "../interfaces/todo.interface";


export type TodoDocument = HydratedDocument<Todo>

@Schema()
export class Todo  {
    @Prop({
        type: mongoose.Schema.Types.Date,
        required: true
    })
    finish_date: Date

    @Prop({
        type: mongoose.Schema.Types.Date,
        required: true,
        default: Date.now
    })
    start_date: Date

    @Prop({
        type: mongoose.Schema.Types.String,
        enum: Object.values(TodosCategory),
        required: true
    })
    category: TodosCategory

    @Prop({
        type: mongoose.Schema.Types.String,
        required: true,
        minlength: 30,
        maxlength: 50
    })
    title: string

    @Prop({
        type: mongoose.Schema.Types.Array,
        required: true
    })
    todos: []
}

export const TodoSchema = SchemaFactory.createForClass(Todo)
