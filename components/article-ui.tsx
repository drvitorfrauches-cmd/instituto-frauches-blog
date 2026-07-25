import type { ReactNode } from "react";
import Image from "next/image";

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-5 leading-relaxed text-neutral-800">{children}</p>;
}

export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-4 mt-10 scroll-mt-24 text-2xl font-semibold text-neutral-900"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 mt-8 text-xl font-semibold text-neutral-900">
      {children}
    </h3>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-neutral-800">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="mb-5 list-decimal space-y-2 pl-6 text-neutral-800">
      {children}
    </ol>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li className="leading-relaxed">{children}</li>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-neutral-900">{children}</strong>;
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mb-5 border-l-4 border-neutral-300 pl-4 italic text-neutral-700">
      {children}
    </blockquote>
  );
}

export function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="mb-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full rounded-lg object-cover"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-neutral-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
      {children}
    </div>
  );
}
