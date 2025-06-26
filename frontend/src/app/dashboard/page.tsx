"use client";

import { useAuth } from "@/store/auth";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import TTable from "@/components/Table";
import dayjs from "dayjs";
import TButton from "@/components/Button";
import TDialog from "@/components/Dialog";
import TFormInput from "@/components/FormInput";
import TFormSelect from "@/components/FormSelect";
import { LeaveApplicationService, LeaveBalanceService, LeaveTypeService } from "@/services/leave-service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useToast } from "@/store/toast";


type FormData = {
  leaveType: number
  startDate: Date
  endDate: Date
  reason: string
}

export default function Home() {
  const auth = useAuth()
  const router = useRouter()
  const leaveApplicationService = new LeaveApplicationService()
  const leaveTypeService = new LeaveTypeService()
  const leaveBalanceService = new LeaveBalanceService()
  const [leaveApplications, setLeaveApplications] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [leaveTypes, setLeaveTypes] = useState([])
  const [leaveBalances, setLeaveBalances] = useState([])
  const { dispatch } = useAuth();
  const temp = useRef([])
  const { formState: { errors }, control, reset, handleSubmit } = useForm<FormData>({
    defaultValues: {
      leaveType: 1
    }
  })

  const statusOptions = [
    {
      label: "All",
      value: "all"
    },
    {
      label: "Pending",
      value: "pending"
    },
    {
      label: "Approved",
      value: "approved"
    },
    {
      label: "Rejected",
      value: "rejected"
    }
  ]
  const { showError, showSuccess } = useToast()
  const columns = [
    {
      name: "Employee", render: (row: any) => {
        return (
          <div>
            <span>{row.employee.firstName} {row.employee.lastName}</span>
          </div>
        )
      }
    },
    { name: "Leave Type", key: "leaveType.typeName" },
    { name: "Start Date", key: "startDate" },
    { name: "End Date", key: "endDate" },
    {
      name: "Status", key: "status", render: (row: any) => {
        return (
          <div>
            <span className={`px-2 py-1 text-white rounded-md ${row.status === "pending" && "bg-yellow-500"} ${row.status === "approved" && "bg-green-500"} ${row.status === "rejected" && "bg-red-500"}`}>{row.status}</span>
          </div>
        )
      }
    },
    { name: "Applied Date", key: "appliedDate" },
    { name: "Reason", key: "reason" },
    {
      name: "Action", key: "action", render: (row: any) => {
        return (
          <div className="flex gap-2">
            {auth?.role === "employee" && (
              <>
                {row.status === "pending" && (
                  <TButton className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => deleteLeave(row.id)}>Delete</TButton>
                )}
              </>
            )}
            {auth?.role === "manager" && (
              <>
                {row.status === "pending" && (
                  <>
                    <TButton className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => approveLeave(row.id)}>Approve</TButton>
                    <TButton className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => rejectLeave(row.id)}>Reject</TButton>
                  </>
                )}
              </>
            )}
          </div>
        )
      }
    },
  ]


  const onSubmit = (data: FormData) => {
    if (data.startDate > data.endDate) {
      showError("Start date must be before end date")
      return
    }

    if (!data.reason) {
      showError("Reason is required")
      return
    }

    if (!data.leaveType) {
      showError("Leave type is required")
      return
    }

    const requestData = {
      startDate: dayjs(data.startDate).toISOString(),
      endDate: dayjs(data.endDate).toISOString(),
      leaveTypeId: Number(data.leaveType),
      reason: data.reason
    }
    leaveApplicationService.createLeaveApplication(requestData).then((res) => {
      if (res.status !== 200) {
        showError(res.message)
        return
      }
      showSuccess(res.message)
      setIsDialogOpen(false)
      reset()
      fetch()
    })
  }


  const fetch = async () => {
    leaveTypeService.getLeaveTypes().then((res) => {
      setLeaveTypes(res.data.map((item: any) => ({
        label: item.typeName,
        value: item.id
      })))
    })
    leaveApplicationService.getLeaveApplications().then((res) => {
      let data = res.data.map((item: any) => ({
        ...item,
        startDate: dayjs(item.startDate).format("DD/MM/YYYY HH:mm"),
        endDate: dayjs(item.endDate).format("DD/MM/YYYY HH:mm"),
        appliedDate: dayjs(item.appliedDate).format("DD/MM/YYYY HH:mm"),
      })) || []
      setLeaveApplications(data)
      temp.current = res.data || []
    })

    leaveBalanceService.getLeaveBalances().then((res) => {
      setLeaveBalances(res.data || [])
    })
  }

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "all") {
      setLeaveApplications(temp.current)
    } else {
      setLeaveApplications(temp.current.filter((item: any) => item.status === e.target.value))
    }
  }

  const approveLeave = (id: number) => {
    leaveApplicationService.updateLeaveApplication(id, { status: "approved" }).then((res) => {
      console.log(res.status)
      if (res.status !== 200) {
        showError(res.message)
        return
      }
      showSuccess(res.message)
      let updatedData = temp.current.map((item: any) => {
        if (item.id === id) {
          return { ...item, status: "approved" }
        }
        return item
      })
      setLeaveApplications(updatedData as any)
      temp.current = updatedData as any
    })

  }

  const rejectLeave = (id: number) => {
    leaveApplicationService.updateLeaveApplication(id, { status: "rejected" }).then((res) => {
      showSuccess("Leave application rejected successfully")
    })
    let updatedData = temp.current.map((item: any) => {
      if (item.id === id) {
        return { ...item, status: "rejected" }
      }
      return item
    })
    setLeaveApplications(updatedData as any)
    temp.current = updatedData as any
  }


  const deleteLeave = (id: number) => {
    leaveApplicationService.deleteLeaveApplication(id).then((res) => {
      showSuccess("Leave application deleted successfully")
      fetch()
    })
  }

  useEffect(() => {
    if (!auth.token) {
      router.push("/login")
    }
  }, [auth.user])



  useEffect(() => {
    fetch()
  }, [])

  return (
    <div className="flex">
      <aside className="w-[200px] px-4 py-16 h-screen bg-slate-800">
        <div className="text-white text-2xl font-bold hover:cursor-pointer">
          <h1>Dashboard</h1>
        </div>
      </aside>
      <main className="w-full p-4">
        <div className="flex flex-col py-16 px-32">
          <div className="flex justify-end">
            <TButton onClick={() => { dispatch({ type: "LOGOUT" }) }} className="bg-red-500 text-white px-4 py-2 rounded-md" >Logout</TButton>
          </div>
          <div className="-m-1.5 overflow-x-auto">
            <div className="flex justify-between items-center">
              <div>
                <TFormSelect label="Leave Type" options={statusOptions} onChange={handleFilter} />
              </div>

              <TButton onClick={() => { setIsDialogOpen(true) }} className="bg-blue-500 text-white px-4 py-2 rounded-md" >Create Leave Application</TButton>
            </div>
            <div>
              Leave Balances: {" "}
              {leaveBalances.map((item: any) => (
                <span key={item.id}>
                  <span>{item.leaveType.typeName}: {" "}</span>
                  <span>{item.totalRemaining}{" "}</span>
                </span>
              ))}
            </div>
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <TTable columns={columns} data={leaveApplications} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <TDialog isOpen={isDialogOpen} onClose={() => { setIsDialogOpen(false) }} onConfirm={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <h1>Create Leave Application</h1>

          <Controller
            control={control}
            name="leaveType"
            render={({ field }) => (
              <TFormSelect label="Leave Type" value={field.value.toString()} options={leaveTypes} onChange={field.onChange} />
            )}
          ></Controller>

          <Controller
            control={control}
            name="reason"
            render={({ field }) => (
              <TFormInput label="Reason" value={field.value} type="text" onChange={field.onChange} />
            )}
          >
          </Controller>

          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <DatePicker dateFormat="MMMM d, yyyy h:mm aa" showTimeSelect selected={field.value} timeIntervals={30} onChange={field.onChange} className="w-full border border-slate-200 rounded-md p-1" placeholderText="Select Start Date" />
            )}
          ></Controller>

          <Controller
            control={control}
            name="endDate"
            render={({ field }) => (
              <DatePicker dateFormat="MMMM d, yyyy h:mm aa" showTimeSelect selected={field.value} timeIntervals={30} onChange={field.onChange} className="w-full border border-slate-200 rounded-md p-1" placeholderText="Select End Date" />
            )}
          ></Controller>

        </div>
      </TDialog>
    </div>
  );
}
