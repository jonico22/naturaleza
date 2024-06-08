'use server'

import directus from '@/lib/directus';
import { readItems    } from '@directus/sdk';
import { notFound } from 'next/navigation';

interface Post {
  title: string;
  descripcion: string;
  imagen: {
    filename_disk: string;
  };
}

export async function getPosts() {
	return directus.request(
    readItems('news', {
      fields: ['slug','title','sumary','imagen',{ imagen: ['filename_disk'] }],
    })
	);
}

export async function getPost(slug: string): Promise<Post> {
  try {
    const response = await directus.request(
      readItems('news' ,{
        fields: ['title', 'slug','descripcion','imagen',{ imagen: ['filename_disk'] }],
        filter: { slug: { _eq: slug } },
      })
    );
    const post: Post = {
      title: response[0].title,
      descripcion: response[0].descripcion,
      imagen: {
        filename_disk: response[0].imagen.filename_disk
      }
    };
    return post;
  } catch (error) {
    console.error(error);
    notFound();
  }
}