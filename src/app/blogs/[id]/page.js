import React from 'react';

const blogs = [
    {
      "id": 1,
      "title": "The Ultimate Guide to Scuba Diving for Beginners",
      "author": "John Doe",
      "date": "2024-12-01",
      "content": "Scuba diving is an amazing experience that lets you explore the underwater world. In this guide, we cover everything you need to know to get started.",
      "tags": ["Scuba Diving", "Beginner", "Adventure"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 150,
      "comments": 12
    },
    {
      "id": 2,
      "title": "Top 10 Dive Spots Around the World",
      "author": "Jane Smith",
      "date": "2024-12-10",
      "content": "From the Great Barrier Reef to the Blue Hole in Belize, here are the top 10 dive spots you must visit at least once in your life.",
      "tags": ["Travel", "Scuba Diving", "Top Spots"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 200,
      "comments": 45
    },
    {
      "id": 3,
      "title": "How to Maintain Your Diving Equipment",
      "author": "Chris Brown",
      "date": "2024-11-15",
      "content": "Proper maintenance of diving gear is essential for safety and longevity. Learn the tips and tricks to keep your equipment in top shape.",
      "tags": ["Diving Equipment", "Maintenance", "Safety"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 85,
      "comments": 8
    },
    {
      "id": 4,
      "title": "The History of Underwater Exploration",
      "author": "Emily Wilson",
      "date": "2024-10-20",
      "content": "Underwater exploration has a fascinating history, from ancient diving bells to modern scuba technology. Dive into the past with this blog.",
      "tags": ["History", "Exploration", "Underwater"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 50,
      "comments": 4
    },
    {
      "id": 5,
      "title": "Top 5 Tips for Underwater Photography",
      "author": "Alex Johnson",
      "date": "2024-09-25",
      "content": "Capture stunning underwater shots with these essential tips for lighting, framing, and equipment setup.",
      "tags": ["Photography", "Underwater", "Tips"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 120,
      "comments": 20
    },
    {
      "id": 6,
      "title": "Diving with Sharks: Safety and Thrills",
      "author": "Sarah Connor",
      "date": "2024-08-15",
      "content": "Experience the thrill of diving with sharks while staying safe. Learn about shark behavior and tips for an unforgettable dive.",
      "tags": ["Sharks", "Adventure", "Safety"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 300,
      "comments": 65
    },
    {
      "id": 7,
      "title": "Eco-Friendly Diving: Protecting Coral Reefs",
      "author": "Tom Hanks",
      "date": "2024-07-20",
      "content": "Learn how to dive responsibly and help protect coral reefs from damage. Tips on eco-friendly diving practices included.",
      "tags": ["Environment", "Coral Reefs", "Diving"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 90,
      "comments": 15
    },
    {
      "id": 8,
      "title": "Essential Gear for Night Diving",
      "author": "Megan Fox",
      "date": "2024-06-18",
      "content": "Night diving can be a magical experience. Make sure you're well-prepared with the right gear and safety tips.",
      "tags": ["Night Diving", "Gear", "Safety"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 140,
      "comments": 10
    },
    {
      "id": 9,
      "title": "Scuba Diving Certifications Explained",
      "author": "Leo Carter",
      "date": "2024-05-10",
      "content": "Wondering which scuba certification is right for you? We break down the options, from PADI to SSI and beyond.",
      "tags": ["Scuba Diving", "Certification", "Beginner"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 180,
      "comments": 25
    },
    {
      "id": 10,
      "title": "Exploring Underwater Caves: A Beginner’s Guide",
      "author": "Laura Mills",
      "date": "2024-04-05",
      "content": "Underwater caves are stunning but can be challenging. Learn the basics of cave diving and how to prepare for your first dive.",
      "tags": ["Cave Diving", "Adventure", "Beginner"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 250,
      "comments": 40
    },
    {
      "id": 11,
      "title": "Best Diving Destinations in Asia",
      "author": "James Bond",
      "date": "2024-03-12",
      "content": "Asia is home to some of the world’s best diving destinations. Discover hidden gems from Indonesia to the Philippines.",
      "tags": ["Asia", "Travel", "Diving"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 220,
      "comments": 50
    },
    {
      "id": 12,
      "title": "Wreck Diving: Exploring Sunken Ships",
      "author": "Sam Parker",
      "date": "2024-02-28",
      "content": "Wreck diving offers a unique experience of exploring sunken ships. Find out the best locations and safety tips for wreck diving.",
      "tags": ["Wreck Diving", "Adventure", "History"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 160,
      "comments": 30
    },
    {
      "id": 13,
      "title": "How to Improve Your Air Consumption Underwater",
      "author": "Kate Williams",
      "date": "2024-01-18",
      "content": "Struggling with air consumption during dives? These tips will help you stay underwater longer and dive more efficiently.",
      "tags": ["Diving Tips", "Air Consumption", "Efficiency"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 130,
      "comments": 18
    },
    {
      "id": 14,
      "title": "Marine Life Encounters: What to Expect",
      "author": "Daniel Craig",
      "date": "2023-12-30",
      "content": "Diving introduces you to incredible marine life. Learn about common encounters and how to interact respectfully.",
      "tags": ["Marine Life", "Diving", "Respect"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 210,
      "comments": 35
    },
    {
      "id": 15,
      "title": "Top 5 Scuba Diving Apps for Divers",
      "author": "Emily Stone",
      "date": "2023-11-20",
      "content": "Check out the best apps for divers to track dives, plan trips, and stay safe underwater.",
      "tags": ["Apps", "Diving", "Tech"],
      "thumbnail": "https://via.placeholder.com/150",
      "likes": 170,
      "comments": 22
    }
  ]
const BlogDetails = ({params}) => {
    
    const blog =  blogs.find(singleBlog => singleBlog.id === parseInt(params?.id))
    return (
        <div className='mt-12 mx-16'>
            <h2 className='text-4xl font-bold text-slate-800 text-center'>{blog?.title}</h2>
            <h3 className='text-2xl font-semibold mt-4 text-right text-slate-600'>- {blog?.author}</h3>
            <p className='mt-6 text-center text-slate-800'>{blog?.content}</p>
        </div>
    );
};
export default BlogDetails;
