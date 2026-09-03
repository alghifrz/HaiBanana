"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";
import { contactChannels } from "@/data/site";

const inputClass =
  "w-full rounded-xl border border-ink/12 bg-cream px-4 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-stone/60 hover:border-ink/25 focus:border-leaf focus:outline-none";

const mailTarget = contactChannels.find((channel) => channel.label === "Email");

export function ContactForm() {
  const [isHandedOff, setIsHandedOff] = useState(false);

  /**
   * There is no backend in this build, so the form composes a mailto link and
   * hands the message to the visitor's own mail client.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!mailTarget) return;

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Enquiry from ${name || "the Banana website"}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company || "-"}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- mailto: handoff, not an internal route
    window.location.href = `${mailTarget.href}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setIsHandedOff(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-ink">
            Nama
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Nama lengkap Anda"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-company" className="text-sm font-medium text-ink">
            Perusahaan <span className="font-normal text-stone">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Nama perusahaan"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-ink">
            Email Anda
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="email@gmail.com"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-medium text-ink">
            Pesan Anda
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Berikan informasi tentang produk dan volume yang Anda butuhkan."
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-all duration-300 ease-out hover:bg-leaf hover:shadow-lg hover:shadow-leaf/20 active:scale-[0.99] sm:w-auto"
      >
        Kirim pesan
        <ArrowRightIcon />
      </button>

      <p aria-live="polite" className="mt-4 text-xs leading-relaxed text-stone">
        {isHandedOff
          ? "Email Anda sekarang sudah terbuka dengan pesan siap dikirim."
          : "Mengirim pesan akan membuka email Anda dengan pesan siap dikirim. Tidak ada data yang disimpan di situs ini."}
      </p>
    </form>
  );
}
