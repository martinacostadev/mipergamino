export default function Button({ className = "", onClick, children }) {
  return (
    <button
      className={`w-full py-2 transition-hover hover:bg-blue-500 text-white-700 font-semibold 
      hover:text-white border border-blue-500 
      hover:border-transparent rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
