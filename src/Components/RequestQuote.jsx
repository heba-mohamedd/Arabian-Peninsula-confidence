import bgImage from "../assets/card.png";
import PrimaryButton from "./ui/PrimaryButton";

export default function RequestQuote({
  title = "",
  description = "",
  buttonText,
  buttonIcon,
}) {
  return (
    <section className="container mx-auto my-10 px-4">
      <div
        className="
          relative
          rounded-3xl
          overflow-hidden
          min-h-[250px]
          flex items-center justify-center
        "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div
          className="
            relative z-10
            text-center text-white
            max-w-2xl
            px-6 py-10
            flex flex-col items-center
          "
        >
          {title && (
            <h2 className="text-xl sm:text-2xl md:text-3xl ">{title}</h2>
          )}

          {description && (
            <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
              {description}
            </p>
          )}

          {buttonText && (
            <div className="mt-6">
              <PrimaryButton text={buttonText} icon={buttonIcon} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
