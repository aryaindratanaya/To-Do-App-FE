import { addToDo, useToDos } from 'libs/hooks/toDo'
import { Card, Table, Form, Button, Input } from 'antd'
import { columns } from 'libs/columns/Home'
import getQuery from 'libs/utils/getQuery'
import s from 'styles/Home.module.css'

export default function Home() {
  const { loading, data: toDos } = useToDos(getQuery())

  return (
    <main className={s.main}>
      <Card title="To Do" className={s.toDoCard}>
        <Form name="add_to_do" onFinish={addToDo}>
          <Form.Item
            label="Item"
            name="item"
            rules={[{ required: true, message: 'Please input an item!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add
            </Button>
          </Form.Item>
        </Form>

        <Table columns={columns} dataSource={toDos || []} loading={loading} />
      </Card>
    </main>
  )
}
