"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  eager?: boolean;
};

// Native <dialog> + showModal(): focus stays inside, Escape closes, the rest of
// the page is inert. The full-size file is only requested once opened.
export function ImageLightbox({ src, alt, width, height, sizes, eager }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  function show() {
    setOpen(true);
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function handleClose() {
    setOpen(false);
    document.documentElement.style.overflow = "";
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={show}
        aria-haspopup="dialog"
        className="group relative block w-full cursor-zoom-in focus-visible:outline-offset-[-4px]"
      >
        <span className="sr-only">Agrandir l’image : </span>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          className="h-auto max-h-[85vh] w-full object-contain"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Agrandir
        </span>
      </button>
      <dialog
        ref={dialogRef}
        aria-label={alt}
        onClose={handleClose}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto max-h-[100dvh] max-w-[100vw] overflow-visible bg-transparent p-0 backdrop:bg-black/90"
      >
        <button
          type="button"
          onClick={close}
          autoFocus
          className="fixed right-3 top-3 z-10 inline-flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-full bg-white px-4 text-sm font-semibold text-bg-primary shadow-lg transition hover:bg-text-soft"
        >
          Fermer
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {open ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="100vw"
            className="h-auto max-h-[92dvh] w-auto max-w-[96vw] rounded-lg object-contain"
          />
        ) : null}
      </dialog>
    </>
  );
}
