export function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "tertial" | "secondary";
}) {
  return variant === "primary" ? (
    <button className='my-3 after:bg-gray-950 overflow-hidden font-bold text-sm after:inset-0 after:absolute after:-z-20 text-white  py-2 px-4 relative hover:text-gray-950 before:inset-0 before:bg-gray-100 before:absolute before:translate-x-full hover:before:translate-x-0 before:transition before:-z-10 after:pointer-events-none before:pointer-events-none'>
      {children}
    </button>
  ) : variant === "tertial" ? (
    <button className='my-1 overflow-hidden after:bg-white group font-bold after:inset-0 after:absolute after:-z-20 fill-gray-950 text-gray-950  py-1 px-2 relative hover:text-white hover:fill-white before:inset-0 before:bg-gray-950 before:absolute before:translate-x-full hover:before:translate-x-0 before:transition before:-z-10 after:pointer-events-none before:pointer-events-none'>
      {children}
    </button>
  ) : null;
}
