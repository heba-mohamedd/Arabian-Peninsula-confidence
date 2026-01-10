export default function Header({ title, description }) {
  return (
    <div className=" flex flex-col items-center justify-center text-center pt-4 gap-3 md:gap-3 px-4">
      <p className="text-primary text-3xl font-bold">{title}</p>
      <p className="text-dark-grey text-center text-sm sm:text-base md:text-lg leading-6 md:leading-8 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
