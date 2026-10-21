import Image from "next/image";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  imageUrl,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-16 md:py-24 text-white">
      {/* Background image if provided */}
      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/90 to-primary-950" />
        </div>
      )}

      {/* Ambient gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="heading-eyebrow !text-primary-300 mb-3 tracking-widest">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-300">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
