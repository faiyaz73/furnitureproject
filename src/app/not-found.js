import Image from "next/image";
import Link from "next/link";

import cabinet from "./image/16253167208651620078433247Louise Cabinet_.jpg";

export default function NotFound() {
    return (
        <main className="relative flex min-h-[calc(100vh-180px)] items-center overflow-hidden bg-[#f7f3ee] px-5 py-16 sm:px-10 lg:px-16">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(#dfd3c6_1px,transparent_1px),linear-gradient(90deg,#dfd3c6_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <section className="order-2 text-center lg:order-1 lg:text-left">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#b18463]">
                        Page not found
                    </p>
                    <h1 className="font-serif text-[clamp(5rem,16vw,11rem)] font-bold leading-[0.8] text-[#3f3026]">
                        404
                    </h1>
                    <h2 className="mt-8 max-w-lg font-serif text-3xl font-bold text-[#3f3026] sm:text-4xl">
                        This corner of the room is empty.
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#75675e] lg:mx-0">
                        The page you are looking for may have moved, or the link may be taking a little rest.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center bg-[#3f3026] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#624b3b]"
                        >
                            Back to Home
                        </Link>
                        <Link
                            href="/#bestselling"
                            className="inline-flex items-center justify-center border border-[#bda58f] px-7 py-3 text-sm font-semibold text-[#5c4637] transition hover:bg-[#eadfd4]"
                        >
                            Explore Furniture
                        </Link>
                    </div>
                </section>

                <section className="order-1 mx-auto w-full max-w-xl lg:order-2" aria-label="Featured furniture">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e8ded3] shadow-[18px_18px_0_#d2bda9]">
                        <Image
                            src={cabinet}
                            alt="Wooden storage cabinet"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-white/90 px-5 py-4 sm:px-7">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#b18463]">Take a pause</p>
                            <p className="mt-1 font-serif text-xl font-bold text-[#3f3026]">Find your way home</p>
                        </div>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-3 text-sm text-[#8a7769] lg:justify-start">
                        <span className="h-px w-10 bg-[#bda58f]" />
                        <span>Furniture for every story</span>
                    </div>
                </section>
            </div>
        </main>
    );
}
