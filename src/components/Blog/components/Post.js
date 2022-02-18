import { useState } from 'react';
import { Divider, Button } from 'antd';
import { EditOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';

export const Post = ({ data, store }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [edit, setEdit] = useState(false)

    const handleEdit = () => {
        setTitle(data.title)
        setContent(data.content)
        setEdit(!edit)
    }

    const handleConfirm = () => {
        store.editPost({ id: data.id, title, content })
        setEdit(!edit)
    }

    return (
        <li style={{ display: 'flex', flexDirection: 'column' }}><Divider />
            {edit ? <input style={{ marginBottom: 20 }} type='text' value={title} onChange={e => setTitle(e.target.value)} /> : <h2>{data.title}</h2>}
            {edit ? <input style={{ marginBottom: 20 }} type='text' value={content} onChange={e => setContent(e.target.value)} /> : <p>{data.content}</p>}
            <div style={{ display: 'flex' }}>
                <Button style={{ marginRight: 10 }} type="primary" icon={edit ? <CloseOutlined /> : <EditOutlined />} onClick={() => handleEdit()} danger={edit}> {edit ? 'Cancel' : 'Edit'}</Button>
                {edit ? <Button type="primary" icon={<CheckOutlined />} onClick={() => handleConfirm()}>Confirm</Button> : <Button type="primary" icon={<DeleteOutlined />} onClick={() => store.deletePost(data.id)} danger>Delete</Button>}
            </div>

        </li>
    )
}