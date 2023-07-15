
export enum TodosCategory{
    GYM = 'Gym',
    HOME = 'Home',
    ACADEMY = 'Academy',
    OTHERS = 'Others'
}

export interface ITodoGym{
    exercise: string;
    repetitons: string;
    done: boolean;
}

export interface ITodoAcademy{
    matter: string;
    description: string;
    done: boolean;
}

export interface ITodoHome {
    area: string;
    description: string;
    done: boolean;
}

export interface ITodo <T> {
    id: string;
    date: string;
    category: TodosCategory;
    title: string;
    todos: T
}




