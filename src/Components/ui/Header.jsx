export default function Header({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12.5 gap-3">
      <p className="text-[#00963F] text-3xl ">{title}</p>
      <p className="text-gray-600 text-center text-lg leading-8 max-w-3xl mx-auto">
        {children}{" "}
      </p>
    </div>
  );
}
