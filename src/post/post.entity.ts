import { Profile } from "src/users/profile.entity"
import { User } from "src/users/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Post{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title:string

    @Column()
    content:string

    @Column()
    authorId: number

    @ManyToOne(() => User, user => user.posts)
    author: User
   

}