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
      <ProfileComponent />

      <PostComponent />
      <br />
      <PostComponent />
      <br />
    </div>
  )
}

function ProfileComponent() {
  return <div style={{ width: 260, marginBottom: 14, backgroundColor: "white", padding: 12, borderRadius: 6 }}>
    <div style={{ textAlign: 'center' }}>
      <img src="https://t3.ftcdn.net/jpg/14/60/58/40/240_F_1460584064_SZ7FhrwKuvrOIomUWrMedQkAsYb4nrT9.jpg" style={{
        height: 130,
        width: 130,
        borderRadius: 100
      }} />
      <h3>Razz Yadav</h3>
      <p>Working with ZebraCoins</p>
    </div>
    <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: "space-between", marginTop: 10 }}>
      <h4>Profile views</h4>
      <p>34,234</p>
    </div>
    <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: "space-between", marginTop: 10 }}>
      <h4>Post Impressions</h4>
      <p>2,234</p>
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
