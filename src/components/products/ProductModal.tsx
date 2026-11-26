"use client";

import { useEffect, useId, useRef } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/ui/icons";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (product) {
      if (!dialog.open) dialog.showModal();
      const { overflow } = document.body.style;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = overflow;
      };
    }

    if (dialog.open) dialog.close();
  }, [product]);

  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      dialogRef.current.close();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClose={onClose}
      onClick={handleDialogClick}
      className="m-0 h-full max-h-none w-full max-w-none border-0 bg-ink/50 p-4 backdrop-blur-sm backdrop:bg-transparent open:flex open:items-center open:justify-center"
    >
      {product ? (
        <div
          data-sheet
          className="relative flex max-h-[min(90dvh,40rem)] w-[min(100%,52rem)] flex-col overflow-hidden rounded-[2rem] bg-cream shadow-2xl sm:flex-row"
        >
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="pressable absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full border border-ink/10 bg-cream/90 text-ink backdrop-blur hover:bg-white hover:text-primary"
          >
            <span className="sr-only">Tutup detail {product.name}</span>
            <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true" focusable="false">
              <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Panel gambar */}
          <div className="relative aspect-4/3 shrink-0 bg-cream-deep sm:aspect-auto sm:w-[42%]">
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 size-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/30"
            />
            <Image
              src={product.image}
              alt={`${product.name} dari Haibanana`}
              fill
              sizes="(min-width: 640px) 22rem, 100vw"
              className="object-contain p-8"
            />
          </div>

          {/* Panel konten */}
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pt-7 pb-5 [scrollbar-width:none] [-ms-overflow-style:none] sm:px-8 sm:pt-9 [&::-webkit-scrollbar]:hidden">
              <p className="text-xs font-medium tracking-wide text-primary/70 uppercase">
                Haibanana · Cavendish
              </p>
              <h2
                id={titleId}
                className="mt-2 pr-10 font-display text-2xl font-semibold tracking-[-0.025em] text-primary sm:text-[1.75rem]"
              >
                {product.name}
              </h2>
              <p
                id={descriptionId}
                className="mt-4 text-[0.9375rem] leading-[1.7] text-pretty text-stone"
              >
                {product.details}
              </p>

              {product.suitableFor.length > 0 ? (
                <div className="mt-6">
                  <p className="text-sm font-medium text-primary">Cocok untuk</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.suitableFor.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm text-ink/80 ring-1 ring-primary/10"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          className="size-3.5 shrink-0 text-secondary"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M3.5 8.5l3 3 6-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="shrink-0 border-t border-ink/10 bg-cream px-6 py-4 sm:px-8">
              <a
                href={getWhatsAppOrderUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-cream hover:bg-ink"
              >
                <WhatsAppIcon />
                Pesan {product.name} via WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}