import React from "react";
import { faStream } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div
            className="flex flex-col "
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
                <button
                    className="px-4 py-2 bg-neutral-400 rounded-lg text-3xl font-bold"
                >
                    Sign In
                </button>
            </div>
            <div
                className="self-center flex gap-2"
            >
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