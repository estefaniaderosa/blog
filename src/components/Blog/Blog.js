
import { observer } from 'mobx-react';
import { Row, Col, Avatar } from 'antd';
import { Post, AddPost } from './components';
import 'antd/dist/antd.min.css';

export const Blog = observer(({ store }) => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <div >
                    <div className='header-container'>
                        <h1>{`Latest posts (${store.postsLength})`}</h1>
                        <div className='header-avatar' >
                            <Avatar size={110} src={store.avatar} />
                            <h4>{store.username}</h4>
                        </div>
                    </div>
                    <div className='addpost-container'>
                        <AddPost store={store} />
                    </div>
                    <ul>
                        {store.posts.map((post) => {
                            return (
                                <Post data={post} key={post.id} store={store} />
                            )
                        })}
                    </ul>
                </div>
            </Col>
        </Row>
    )
})
