import { useEffect } from 'react'
import axios from 'axios'
import { Card, Table } from 'antd'
import toast from 'libs/utils/toast'
import { columns } from 'libs/columns/Home'
import s from 'styles/Home.module.css'

export default function Home({ data, error }) {
  // pop a toast if there is an error when fetching
  useEffect(() => {
    if (error) {
      toast({ type: 'error', description: error })
    } else {
      toast({})
    }
  })

  return (
    <main className={s.main}>
      <Card title="To Do List" className={s.toDoCard}>
        <Table columns={columns} dataSource={data || []} />
      </Card>
    </main>
  )
}

export async function getStaticProps() {
  try {
    const result = await axios.get(`http://localhost:8000`)
    const data = result.data
    return {
      props: {
        data: data,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 2 seconds
      // Note: not to be confused - this does not make a request
      revalidate: 2, //
    }
  } catch (error) {
    return {
      props: {
        error: error.toString(),
      },
    }
  }
}
