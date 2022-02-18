import { useState } from 'react';
import { Button, Form, Input, } from 'antd';
import 'antd/dist/antd.min.css';

export const AddPost = ({ store }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [showError, setShowError] = useState(false)
    const handleSubmit = () => {
        if (!title || !content) {
            setShowError(true)
        } else {
            setShowError(false)
            setTitle('')
            setContent('')
            store.addPost({ title, content })
        }
    }

    return (
        <>
            <Form layout='vertical' style={{ marginBottom: 20 }}>
                <Form.Item label="Title">
                    <Input onChange={(e) => setTitle(e.target.value)} value={title} />
                </Form.Item>

                <Form.Item label="Content">
                    <Input.TextArea onChange={(e) => setContent(e.target.value)} value={content} />
                </Form.Item>
                {showError ? <p className='error'>All inputs must be filled</p> : null}
                <Button type="primary" htmlType="submit" onClick={() => handleSubmit()}>
                    Add post
                </Button>
            </Form>
            
        </>
    )
}