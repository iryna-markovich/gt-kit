import { Button } from './lib'

function App() {
  return (
    <div className='App'>
      <Button type='primary' disabled size='l' onClick={() => {}}>
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
      </Button>
    </div>
  )
}

export default App
