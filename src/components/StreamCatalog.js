import React from "react";

const StreamCatalog = ({ streams }) => {
    return (
        <div
            className="flex gap-2 justify-center flex-wrap"
        >
            {
                streams.map((stream) => {
                    return (
                        <button
                            className="flex flex-col items-center"
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
                                <p>
                                    {"User Id: " + stream.uid}
                                </p>
                            </div>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default StreamCatalog;