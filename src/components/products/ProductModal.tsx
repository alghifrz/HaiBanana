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
      className="m-0 h-full max-h-none w-full max-w-none border-0 bg-ink/45 p-4 backdrop:bg-transparent open:flex open:items-center open:justify-center"
    >
      {product ? (
        <div className="relative flex w-[min(100%,36rem)] max-h-[min(90dvh,42rem)] flex-col overflow-hidden rounded-3xl bg-cream shadow-2xl shadow-ink/20">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-colors duration-200 hover:bg-white hover:text-leaf"
          >
            <span className="sr-only">Tutup detail {product.name}</span>
            <svg
              viewBox="0 0 16 16"
              className="size-4"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 4l8 8M12 4l-8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="relative aspect-4/3 bg-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="36rem"
                className="object-contain p-6"
              />
            </div>

            <div className="px-6 pt-6 pb-5 sm:px-8">
              <h2 id={titleId} className="font-display text-2xl font-semibold tracking-tight text-leaf">
                {product.name}
              </h2>
              <p id={descriptionId} className="mt-3 text-[14px] leading-relaxed text-pretty text-stone">
                {product.details}
              </p>

              {product.suitableFor.length > 0 ? (
                <div className="mt-5">
                  <p className="text-xs font-medium tracking-[0.16em] text-leaf uppercase">
                    Cocok untuk
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.suitableFor.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-leaf-soft px-3 py-1 text-xs text-leaf"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>

          <div className="shrink-0 border-t border-ink/8 bg-cream px-6 py-4 sm:px-8">
            <a
              href={getWhatsAppOrderUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf px-6 py-3.5 text-sm font-medium text-cream transition-all duration-300 ease-out hover:bg-ink hover:shadow-lg hover:shadow-leaf/25 active:scale-[0.99]"
            >
              <WhatsAppIcon />
              Pesan {product.name} via WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
