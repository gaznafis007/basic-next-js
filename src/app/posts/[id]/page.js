import { fetchData } from '@/utils/fetchData';
import React from 'react';

export const generateMetadata = async ({params}) =>{
        return {
            title: {
                absolute: `Post Details | ${params?.id}`
            }
        }
}
const PostDetails = async({params}) => {
    const {id} = await params;
    const post = await fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return (
        <div className='mt-12 mx-16'>
            <h2 className='text-3xl font-bold text-center text-emerald-500'>{post?.title}</h2>
            <p className='w-full md:w-1/3 mx-auto mt-6 text-justify leading-loose'>{post?.body}</p>
        </div>
    );
};

export default PostDetails;