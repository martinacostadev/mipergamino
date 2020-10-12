export default function GenericIcon({ children, color, size, className }) {
  return (
    <svg className={`${color} ${className}`} width={`${size}`} height={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 512 512"
    >
      {children}
    </svg>
  )
}
