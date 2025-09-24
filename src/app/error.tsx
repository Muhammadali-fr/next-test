"use client";

import { useTransition } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const [isPending, startTransition] = useTransition();

    return (
        <div>
            <p className="text-red-500">{error.message}</p>
            <button
                onClick={() => startTransition(() => reset())}
                className="px-4 py-2 bg-red-500 text-white rounded"
            >
                {isPending ? "Retrying..." : "Try again"}
            </button>
        </div>
    );
}
