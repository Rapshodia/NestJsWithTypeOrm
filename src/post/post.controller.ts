import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {

    constructor(
        private postsService: PostService
    ){}

    @Post()
    createPost(@Body() post: CreatePostDto){
        return this.postsService.createPost(post)
    }

    @Get()
    getPosts(){
        
        return this.postsService.getPosts()
    }
}
