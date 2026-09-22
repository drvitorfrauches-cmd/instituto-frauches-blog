import type { ReactNode } from "react";
import Image from "next/image";

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-5 leading-[1.75] text-ink">{children}</p>;
}

export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-4 mt-12 scroll-mt-24 font-display text-2xl font-medium text-balance text-ink"
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 mt-8 text-lg font-semibold text-balance text-ink">
      {children}
    </h3>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-ink marker:text-pine">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="mb-5 list-decimal space-y-2 pl-6 text-ink marker:font-data marker:text-pine">
      {children}
    </ol>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li className="leading-relaxed">{children}</li>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mb-5 border-l-2 border-pine py-1 pl-5 italic text-stone">
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
        className="w-full border border-line object-cover"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-stone">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 border border-line bg-pine-soft p-4 text-sm text-pine-ink">
      {children}
    </div>
  );
}

export function Cta({ children, href }: { children: ReactNode; href: string }) {
  return (
    <div className="mb-6 flex flex-col gap-3 border border-line p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-ink">{children}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 bg-ink px-4 py-2 text-center text-sm font-semibold text-paper hover:bg-pine"
      >
        Agendar avaliação
      </a>
    </div>
  );
}
