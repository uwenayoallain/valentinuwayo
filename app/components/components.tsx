export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className='my-3 after:bg-gray-950 font-bold after:inset-0 after:absolute after:-z-20 text-white  py-2 px-4 relative hover:text-gray-950 before:inset-0 before:bg-white before:absolute before:translate-x-full hover:before:translate-x-0 before:transition before:-z-10 after:pointer-events-none before:pointer-events-none'>
      {children}
    </button>
  );
}
