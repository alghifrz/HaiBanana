import Image from "next/image";
import type { PartnershipBenefit } from "@/types/content";

interface PartnerCardProps {
  partner: PartnershipBenefit;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <article className="group relative h-full min-h-[18rem] overflow-hidden rounded-[1.75rem]">
      <Image
        src={partner.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black via-black/70 to-transparent sm:h-32 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
      />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="rounded-2xl p-1 transition-all duration-300 ease-out lg:group-hover:bg-leaf/90 lg:group-hover:p-5 lg:group-hover:shadow-lg lg:group-hover:shadow-ink/20">
          <h3 className="font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
            {partner.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-pretty text-cream/85 lg:mt-0 lg:grid lg:grid-rows-[0fr] lg:opacity-0 lg:transition-all lg:duration-300 lg:ease-out lg:group-hover:mt-2 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100">
            <span className="overflow-hidden">{partner.description}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
