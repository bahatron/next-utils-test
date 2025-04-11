"use client";

import { logger } from "../logger";

export default function Home() {
    return (
        <div className="py-[100px] flex flex-col gap-20">
            <h1 className="text-3xl text-center">Testing Logger</h1>

            <div className="flex justify-center">
                <button
                    className="border border-white border-2 rounded p-2 w-fit hover:cursor-pointer"
                    onClick={() =>
                        logger.info(
                            { foo: "bar", baz: ["hello", "world"] },
                            "hello!"
                        )
                    }
                >
                    Click me
                </button>
            </div>
        </div>
    );
}
