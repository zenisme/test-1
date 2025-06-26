import TButton from "./Button";



export default function TDialog({ children, isOpen, onClose, onConfirm }: { children: React.ReactNode, isOpen: boolean, onClose?: () => void, onConfirm?: () => void }) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex justify-center items-center">
                    <div className="bg-white border border-slate-200 p-4 rounded-md ">
                        {children}
                        <div className="flex justify-end gap-2 mt-4">
                            <TButton className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={onClose}>Close</TButton>
                            <TButton className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onConfirm}>Confirm</TButton>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}