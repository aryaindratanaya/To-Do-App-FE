import { useToDos } from 'libs/hooks/toDo'
import { Card, Table, Form, Button, Input } from 'antd'
import { columns } from 'libs/columns/Home'
import getQuery from 'libs/utils/getQuery'
import s from 'styles/Home.module.css'

export default function Home() {
  const { loading, data, onAdd } = useToDos(getQuery())
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    const res = await onAdd(values)
    res?.status === 200 && form.resetFields()
  }

  return (
    <main className={s.main}>
      <Card title="To Do" className={s.toDoCard}>
        <Form onFinish={onFinish} form={form}>
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

        <Table
          columns={columns}
          // Add a unique 'key' to each child in a list
          dataSource={data?.map((item, i) => ({ ...item, key: i })) || []}
          loading={loading}
        />
      </Card>
    </main>
  )
}
