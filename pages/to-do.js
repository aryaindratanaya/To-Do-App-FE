import { useEffect } from 'react'
import useSWR from 'swr'
import { Card, Table } from 'antd'
import toast from 'libs/utils/toast'
import { columns } from 'libs/columns/Home'
import s from 'styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ToDo() {
  const { data, error } = useSWR('http://localhost:8000', fetcher)

  // Pop a toast on loading or error
  useEffect(() => {
    if (error) {
      toast({ type: 'error', description: error.toString() })
    }
    if (!data) {
      toast({ type: 'info', message: 'Fetching data . . .' })
    }
  })

  return (
    <main className={s.main}>
      <Card title="To Do" className={s.toDoCard}>
        <Table columns={columns} dataSource={data || []} />
      </Card>
    </main>
  )
}
