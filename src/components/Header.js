import React from "react";
import { faStream } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase-config";

const Header = ({user, setUser}) => {

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then((result) => {
            setUser({
                name: result.user.displayName,
                email: result.user.email,
                profilePc: result.user.photoURL,
                uid: result.user.uid,
            });
        })
        .catch(error => {
            throw error;
        });
    };

    return (
        <div
            className="flex flex-col gap-6"
        >
            <div
                className="flex justify-between px-12 pt-6"
            >
                <FontAwesomeIcon icon={faStream} size="3x"/>
                <p
                    className="text-4xl font-bold"
                >
                    Wired
                </p>
                {
                    (user.name) ?
                        <button
                            className="p-2 hover:bg-neutral-300 rounded-full"
                        >
                            <img 
                                src={user.profilePc} 
                                alt="user profile" 
                                className="rounded-full w-12"
                                title={"Name: " + user.name + "\nEmail: " + user.email + "\nUserId: " + user.uid}
                            />
                        </button> :
                        <button
                            onClick={handleGoogleSignIn}
                            className="px-4 py-2 bg-neutral-400 rounded-lg text-3xl font-bold"
                        >
                            Sign In With Google
                        </button>
                }     
            </div>
            <div
                className="self-center flex gap-2"
            >
                <Link
                    to="/"
                    className="px-4 py-2 bg-neutral-400 rounded-lg text-xl font-bold"
                >
                    Browse Streams
                </Link>
                <button
                    className="px-4 py-2 bg-neutral-400 rounded-lg text-xl font-bold"
                >
                    Start Stream
                </button>
                <input 
                    className="border-2 border-neutral-900 rounded-lg p-2 w-[300px]"
                    type="text" 
                    placeholder="Stream Name..."
                />
                <input 
                    className="border-2 border-neutral-900 rounded-lg p-2 w-[300px]"
                    type="text" 
                    placeholder="Role..."
                />
                <input 
                    className="border-2 border-neutral-900 rounded-lg p-2 w-[300px]"
                    type="text" 
                    placeholder="User Id..."
                />
            </div>
        </div>
    )
}

export default Header;