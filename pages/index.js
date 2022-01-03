import { Card, Table, Button } from 'antd'

import { columns } from 'utils/columns/Home'

import s from 'styles/Home.module.css'

export default function Home({ data }) {
  return (
    <main className={s.main}>
      <Card title="To Do List" className={s.toDoCard}>
        <Table columns={columns} dataSource={data || []} />
      </Card>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8000`)
  const data = await res.json()

  if (data?.detail === 'Not Found') {
    return { notFound: true }
  }

  return {
    props: { data },
  }
}
