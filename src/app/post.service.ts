import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    { _id: '1', titre: 'Post 1', contenu: 'Contenu du post 1' },
    { _id: '2', titre: 'Post 2', contenu: 'Contenu du post 2' },
    { _id: '3', titre: 'Post 3', contenu: 'Contenu du post 3' },
    { _id: '4', titre: 'Post 4', contenu: 'Contenu du post 4' }
  ];
}
