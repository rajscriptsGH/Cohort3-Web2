import './App.css'

function App() {
  return (
    <div style={{
      backgroundColor: 'grey',
      height: '100vh',
      width: '100%',
      display: 'flex',
      // justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <PostComponent />
      <br />
      <PostComponent />
      <br />
      <PostComponent />
      <br />
    </div>
  )
}

function ProfileComponent() {
  return <div>
    <div>
      <img src="" alt="" />
    </div>
  </div>
}

function PostComponent() {
  return <div style={{
    width: 250,
    backgroundColor: "black",
    color: 'white',
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',

  }}>
    <div>
      <div style={{ display: 'flex', marginBottom: 10 }}>
        <div>
          <img src="https://t3.ftcdn.net/jpg/14/60/58/40/240_F_1460584064_SZ7FhrwKuvrOIomUWrMedQkAsYb4nrT9.jpg" style={{
            height: 50,
            width: 50,
            borderRadius: 20
          }} />
        </div>
        <div style={{ marginLeft: 12 }}>
          <div style={{ fontSize: 30 }}>
            10xDevs
          </div>
          <div style={{ fontSize: 15 }}>
            23,333 followers
          </div>
          <div style={{ fontSize: 15 }}>
            12m
          </div>

        </div>
      </div>
      <div style={{ fontSize: 15, padding: 5 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis veniam maxime numquam quae doloribus?
      </div>
    </div>
  </div>
}

export default App
