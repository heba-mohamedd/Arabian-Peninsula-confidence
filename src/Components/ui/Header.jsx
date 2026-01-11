export default function Header({ title, description, colorOfHeader = "" }) {
  return (
    <div className=" flex flex-col items-center justify-center text-center  gap-3 md:gap-3 px-4">
      <p
        className={` text-3xl font-bold ${
          colorOfHeader ? colorOfHeader : "text-primary"
        }`}
      >
        {title}
      </p>
      <p className="text-dark-grey text-center text-sm sm:text-base md:text-lg leading-6 md:leading-8 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
