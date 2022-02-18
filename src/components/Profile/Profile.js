import { observer } from 'mobx-react';
import { useState, useEffect } from 'react';
import { Row, Col, Avatar, Button, Divider } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import Axios from 'axios';
import randomWords from 'random-words';

export const Profile = observer(({ store }) => {
  const [word, setWord] = useState('');

  const getRandomWord = () => {
    return (
      setWord(randomWords({ exactly: 1, min: 4, max: 10 })[0])
    );
  }

  const unsplashID = '6g1VJ_SE_5Hcn19cF7Q97dC6YbUc63UjRV0kyZU0d8E';

  useEffect(() => {
    if (word) {
      const url = `https://api.unsplash.com/search/photos?page=1&per_page=1&orientation=squarish&query=${word}&client_id=${unsplashID}`

      Axios.get(url)
        .then((response) => {
          if (response.data.results.length === 0) {
            getRandomWord()
          }
          else {
            store.changeAvatar(response.data.results[0].urls.small)
          }
        })
    }
  }, [word, store]);

  return (
    <Row>
      <Col span={12} offset={6}>
        <div className='profile-container'>
          <Avatar size={200} src={store.avatar} />
          <Button className='avatar-button' onClick={() => getRandomWord()} type='primary' icon={<ReloadOutlined />}>Generate Random Avatar</Button><Divider />
          <h2>{store.username}</h2>
          <h3>janedoe@mail.com</h3>
          <h3>{store.postsLength}posts submitted</h3>
        </div>
      </Col>
    </Row>
  )
})
