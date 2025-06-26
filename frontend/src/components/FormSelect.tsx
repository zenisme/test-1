


export default function TFormSelect({ label, value, options, onChange, ...rest }: { label: string, value?: string, options: any[], onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, error?: string }) {

    return (
        <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
                <label htmlFor={label} className="text-slate-600 text-sm">{label}</label>
                <select className="w-full pl-3 pr-3 py-2 bg-transparent 
                placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition
                 duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"  value={value} onChange={(e) => onChange(e)} {...rest}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}