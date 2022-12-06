import { Post } from "./post.model";
import { Contest } from "./contest.model";

export class User {

    constructor(public username: string, public email: string, public id: number, public password: string, public contest?: Contest[], public followers?: User[], public following?: User[], public posts?: Post[]) { }
}