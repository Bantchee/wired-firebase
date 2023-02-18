import React from "react";
import { Link } from "react-router-dom";

const StreamCatalog = ({ streams, setCurrentStream, setInCall}) => {
    return (
        <div
            className="flex gap-2 justify-center flex-wrap"
        >
            {
                streams.map((stream) => {
                    return (
                        <Link
                            to="stream"
                            className="flex flex-col items-center"
                            onClick={() => {
                                setCurrentStream(stream);
                                setInCall(true);
                            }}
                        >
                            <div 
                                className="w-[200px] h-[100px] bg-neutral-900"
                                title={"Token: " + stream.token}
                            >
                            </div>
                            <div
                                className="flex flex-col w-[150px]"
                            >
                                <p>
                                    {"Stream Name: " + stream.channel}
                                </p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default StreamCatalog;