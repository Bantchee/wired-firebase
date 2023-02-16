import React from "react";
import { faStream } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div
            className="flex flex-col"
        >
            <div>
                <FontAwesomeIcon icon={faStream} size="2x"/>
                <button
                    className="p-2 bg-neutral-400 rounded-lg"
                >
                    Sign In
                </button>
            </div>
            <div>
                <button
                    className="p-2 bg-neutral-400 rounded-lg"
                >
                    Start Stream
                </button>
                <input 
                    className="border-2"
                    type="text" 
                    placeholder="Stream Name..."
                />
            </div>
        </div>
    )
}

export default Header;