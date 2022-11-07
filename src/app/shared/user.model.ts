import { Post } from "./post.model";

export class User {

    constructor(public username: string, public followers: User[], public email: string, public following: User[], public posts: Post[]) { }
}