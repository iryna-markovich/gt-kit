import { Button, Menu, Main } from './lib'

function App() {
  const dataMenu = [
    { key: 'hhh', name: 'Profile', link: '/', icon: 'profile' },
    { key: 'hhyh', name: 'People', link: '/j' },
  ]
  return (
    <div className='App'>
      <Menu title={'People'} dataList={dataMenu} />
      <Main>
        <div>ii</div>
        <div>ii</div>
      </Main>

      {/* <Button type='primary' disabled size='l' onClick={() => {}}>
        fgfgfg
      </Button>
      <Button type='secondary' disabled size='l' onClick={() => {}}>
        fgfgfg
      </Button>
      <Button size='l' disabled onClick={() => {}}>
        fgfgfg
      </Button>
      <br />
      <Button type='primary' size='' onClick={() => {}}>
        fgfgfg
      </Button>
      <Button type='secondary' size='' onClick={() => {}}>
        fgfgfg
      </Button>
      <Button size='' onClick={() => {}}>
        fgfgfg
      </Button>
      <br />

      <Button type='primary' size='s' onClick={() => {}}>
        fgfgfg
      </Button>
      <Button type='secondary' size='s' onClick={() => {}}>
        fgfgfg
      </Button>
      <Button size='s' onClick={() => {}}>
        fgfgfg
      </Button> */}
    </div>
  )
}

export default App
