import Image from "next/image";
import type { PartnershipBenefit } from "@/types/content";

interface PartnerCardProps {
  partner: PartnershipBenefit;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <article className="group relative h-full min-h-[18rem] overflow-hidden rounded-3xl">
      <Image
        src={partner.image}
        alt={partner.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 ease-spring-out group-hover:scale-[1.03]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink via-ink/45 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-cream sm:text-2xl">
          {partner.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-[1.6] text-pretty text-cream/85">
          {partner.description}
        </p>
      </div>
    </article>
  );
}
