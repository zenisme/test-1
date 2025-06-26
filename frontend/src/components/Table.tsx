"use client"

import { memo, useState } from "react"
import _ from 'lodash'
import TButton from "./Button"

const TRow = memo(({ data, columns }: { data: any[], columns: any[] }) => {
    return (
        <tr>
            {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{column.render ? column.render(data) : _.get(data, column.key)}</td>
            ))}
        </tr>
    )
})
export default function TTable({ columns, data, perPage = 10, page = 1 }: { columns: any[], data: any[], perPage?: number, page?: number }) {
    const [currentPage, setCurrentPage] = useState(page)
    const totalPages = Math.ceil(data.length / perPage)

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key} scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">{column.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.slice((currentPage - 1) * perPage, currentPage * perPage).map((item) => (
                        <TRow data={item} columns={columns} />
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end gap-2">
                <TButton className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handlePrevious}>Previous</TButton>
                <TButton className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleNext}>Next</TButton>
            </div>
        </>
    )
}