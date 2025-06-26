







export default function TButton({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }) {
    return (
        <button className={`bg-blue-500 text-white px-4 py-2 rounded-md ${className} hover:cursor-pointer`} onClick={onClick}>
            {children}
        </button>
    )
}