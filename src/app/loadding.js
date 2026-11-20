import React from "react";

export default function Loading() {
    return (
        <main
            className="flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f4ef] px-5 py-12"
            aria-busy="true"
            aria-live="polite"
        >
            <div className="w-full max-w-md text-center">
                <div className="mb-10 flex items-center justify-center gap-3">
                    <span className="h-px w-12 bg-[#c79d7c] sm:w-20" />
                    <span className="font-serif text-2xl font-bold tracking-[0.22em] text-[#44352d] sm:text-3xl">
                        MONSTA
                    </span>
                    <span className="h-px w-12 bg-[#c79d7c] sm:w-20" />
                </div>

                <div className="relative mx-auto h-44 w-52 sm:h-52 sm:w-64" aria-hidden="true">
                    <div className="absolute bottom-3 left-1/2 h-5 w-40 -translate-x-1/2 rounded-full bg-[#dfcfc0] blur-sm sm:w-52" />
                    <div className="absolute bottom-7 left-1/2 h-24 w-36 -translate-x-1/2 rounded-sm border-4 border-[#8a5f42] bg-[#b9855f] shadow-[inset_0_8px_0_rgba(255,255,255,0.13)] sm:w-44" />
                    <div className="absolute bottom-[6.4rem] left-1/2 h-7 w-44 -translate-x-1/2 rounded-sm bg-[#744b34] sm:w-56" />
                    <div className="absolute bottom-0 left-[3.25rem] h-9 w-3 rounded-b bg-[#744b34] sm:left-[4.25rem]" />
                    <div className="absolute bottom-0 right-[3.25rem] h-9 w-3 rounded-b bg-[#744b34] sm:right-[4.25rem]" />
                    <div className="absolute left-1/2 top-1 h-12 w-1 -translate-x-1/2 bg-[#744b34]" />
                    <div className="absolute left-1/2 top-0 h-3 w-14 -translate-x-1/2 rounded-full bg-[#c79d7c]" />
                </div>

                <p className="mt-8 font-serif text-2xl font-bold text-[#44352d]">Making your space beautiful</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#a0836e]">Please wait</p>

                <div className="mx-auto mt-7 h-1 w-48 overflow-hidden rounded-full bg-[#e3d8ce] sm:w-64">
                    <div className="h-full w-1/3 animate-loading-bar rounded-full bg-[#b9855f]" />
                </div>
            </div>
        </main>
    );
}
