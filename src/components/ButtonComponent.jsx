import { Button } from 'antd';
import { useState } from 'react';
import { CopyOutlined } from  '@ant-design/icons'

const ButtonComponent = () => {

  const [loading, setLoading] = useState(false)

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => {

      setLoading(false)

    }, 4000)
  }


  return (
    <div className='flex-row'>
      <Button>Button</Button>
      <Button type="primary" block onClick={() => {console.log('Primary clicked')}}>Primary Button</Button>
      <Button type="ghost">Ghost</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link" href='https://annastacia-portfolio.vercel.app/'>Link</Button>
      <Button type="text">Text</Button>
      <Button type='primary' loading={loading} onClick={handleLoading}>Loading</Button>
      <Button type='primary' icon={<CopyOutlined />}>
        Copy
      </Button>
      <Button type='primary' style={{backgroundColor: 'orangered', color: 'darkblue'}}>
        Custom
      </Button>

    </div>

  )
}

export default ButtonComponent
