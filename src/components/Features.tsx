import React from 'react';
import userData from "../data/music.json";
import Link from 'next/link';

interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    fullName: string,
    avatar: string,
    coverImage: string,
    watchHistory: string[],
    createdAt: string,
    updatedAt: string,
    v: number,
    refreshToken: string
}

function Features() {
    const allUsers: User[] = userData.data.map((user: any) => ({
        id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
        fullName: user.fullName,
        avatar: user.avatar,
        coverImage: user.coverImage,
        watchHistory: user.watchHistory,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        v: user.__v,
        refreshToken: user.refreshToken
    }));

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Features</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Check out the features of our app
                    </p>
                </div>
            </div>

            <div className='mt-10'>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                    {allUsers.map((user) => (
                        <div
                            key={user.id} // Ensure each child has a unique key
                            className="relative bg-zinc-900 text-white rounded-3xl p-6 max-w-sm mx-auto shadow-[0_0_50px_25px_rgba(124,58,237,0.5)]
            border border-zinc-800 transition"
                        >
                            {/* Cover Image */}
                            <img
                                src={user.coverImage}
                                alt={`${user.username}'s cover`}
                                className="w-full h-40 object-cover rounded-2xl"
                            />

                            {/* Avatar Image */}
                            <img
                                src={user.avatar}
                                alt={`${user.username}'s avatar`}
                                className="w-24 h-24 object-cover rounded-xl mt-[-48px] mx-auto border-4 border-zinc-900"
                            />

                            {/* User Info */}
                            <div className="text-center mt-4">
                                <h3 className="text-xl font-bold">{user.fullName}</h3>
                                <p className="text-gray-400">@{user.username}</p>
                                <p className="text-gray-400">{user.email}</p>
                                <p className="text-gray-400">Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="mt-20 text-center">
                <Link href={"/products"}>
                    <button className="p-[3px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                            More Products
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Features;
