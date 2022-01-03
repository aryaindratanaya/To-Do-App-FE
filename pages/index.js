import { Card, Table } from 'antd'

import { columns } from 'utils/columns/Home'

import s from 'styles/Home.module.css'

export default function Home({ data }) {
  return (
    <main>
      <Card title="To Do List" className={s.toDoCard}>
        <Table columns={columns} dataSource={data || []} />
      </Card>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8000`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
