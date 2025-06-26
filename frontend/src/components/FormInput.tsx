

export default function TFormInput({ label, value, type, error, onChange, ...rest }: { label: string,  type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, error?: string }) {
    return (
        <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
                <input
                    className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder={label}
                    value={value}
                    type={type}
                    onChange={onChange}
                />
                {error && (
                    <p className="flex items-start mt-2 text-xs text-slate-400">
                        {error}
                    </p>
                )}
            </div>
        </div>
    )
}