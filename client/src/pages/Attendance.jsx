import React, { useCallback, useEffect, useState } from 'react'
import { dummyAttendanceData } from '../assets/assets'
import Loading from '../components/Loading'
import CheckinnButton from '../components/attendence/CheckinnButton'
import AttendanceStats from '../components/attendence/AttendanceStats'
import AttendanceHistory from '../components/attendence/AttendanceHistory'

const Attendance = () => {
  const [history ,setHistory] = useState([])
  const [loading,setLoading] = useState(true)
  const [isDeleted,setIsDeleted] = useState(false)

  const fetchData = useCallback(async ()=>{
    setHistory(dummyAttendanceData)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])

  useEffect(()=>{
    fetchData()
  },[fetchData]);

  if(loading) return <Loading/>

  const today = new Date()
  today.setHours(0,0,0,0)
  const todayRecord = history.find((r)=> new Date(r.date).toDateString()=== today.toDateString())
  return (
    <div className='animate-fade-in'>
      <div className='page-header'>
          <h1 className='page-title'>Attendance</h1>
          <p className='page-subtitles'>Track your work hours and daily check-inns </p>
      </div>

      {isDeleted ?(
        <div className='mb-8 p-6 bg-rose-50 border border-rose-200 rounded-2xl'>
            <p className='text-rose-600'>
              You can no longer clock in or out becouse your employee recorde have been marked as deleted.
            </p>
        </div>
      ):(
        <div className='mb-8'>
            <CheckinnButton todayRecord={todayRecord} onAction={fetchData}/>
        </div>
      )}

      <AttendanceStats history={history} />
      <AttendanceHistory history={history} />
      
    </div>
  )
}

export default Attendance
