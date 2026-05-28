import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function EditorialImage({ src, alt, className = "", priority }: EditorialImageProps) {
  return (
    <div className={`grain overflow-hidden bg-ink shadow-editorial ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        priority={priority}
        className="image-lift h-full w-full object-cover"
      />
    </div>
  );
}
