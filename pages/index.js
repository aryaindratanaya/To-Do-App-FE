import { useEffect } from 'react'
import useSWR from 'swr'
import { addToDo } from 'libs/hooks/toDo'
import { Card, Table, Form, Button, Input } from 'antd'
import toast from 'libs/utils/toast'
import { columns } from 'libs/columns/Home'
import s from 'styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function ToDo() {
  const { data, error } = useSWR('http://localhost:8000', fetcher)

  // Pop a toast on loading || error || success
  useEffect(() => {
    if (error) {
      toast({ type: 'error', description: error.toString() })
    }
    if (!data) {
      toast({ type: 'info', description: 'Fetching data . . .' })
    }
    if (data && !error) {
      toast({ description: 'Data has been loaded' })
    }
  })

  const onFinish = (values) => {
    addToDo(values)
  }

  return (
    <main className={s.main}>
      <Card title="To Do" className={s.toDoCard}>
        <Form name="add_to_do" onFinish={onFinish}>
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
          loading={!data && !error}
          columns={columns}
          dataSource={data || []}
        />
      </Card>
    </main>
  )
}
