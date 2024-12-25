import React from 'react';

const AllBlogDetails = async ({params}) => {
    const {id} = await params
    console.log(id)
    return (
        <div>
            These are the params,
            <ul>
                {
                    id.map((param, idx) =>(
                        <li key={idx}>Hello: {param}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default AllBlogDetails;