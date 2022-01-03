import { Card, Table } from 'antd'

import { columns } from 'utils/Home'

import s from 'styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <Card title="To Do List" className={s.toDoCard}>
        <Table columns={columns} dataSource={[]} />
      </Card>
    </main>
  )
}
