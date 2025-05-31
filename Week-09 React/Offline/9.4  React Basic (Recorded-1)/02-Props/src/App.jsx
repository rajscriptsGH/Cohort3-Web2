import './App.css'

function App() {
  return (
    <div style={{
      backgroundColor: 'grey',
      height: '100vh',
      width: '100%',
      display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'center',
    }}>
      <div style={{ margin: 6, marginRight: 20 }}>
        <ProfileComponent />
      </div>
      <div style={{ margin: 6, marginRight: 20 }}>
        <PostComponent
          title="10xDevs"
          followers='23,333 followers'
          minute="12m"
          content="orem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipis"

        />
        <br />
        <PostComponent
          title="CWH"
          followers='1M followers'
          minute="12m"
          content="orem ipsum dolor ipsum dolor sit amet consectetur sit amet consectetur adipis"
        />
        <br />
        <PostComponent
          title="Fireship"
          followers='900k followers'
          minute="12m"
          content="orem ipsum dolor ipsum dolor sit amet consectetur sit amet consectetur adipis"
        />
        <br />
        <PostComponent
          title="Harkirat"
          followers='600k followers'
          minute="12m"
          content="ipsum dolor sit amet consecteturorem ipsum dolor sit amet consectetur adipis"
        />
        <br />
      </div>
    </div>
  )
}

function ProfileComponent() {
  return <div style={{
    width: 260,
    marginBottom: 14,
    backgroundColor: "white",
    color: "black",
    padding: 12,
    borderRadius: 6
  }}>
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

function PostComponent({ title, followers, minute, content }) {
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
        <div style={{ marginLeft: 12, textAlign: 'left' }}>
          <div style={{ fontSize: 30 }}>
            {title}
          </div>
          <div style={{ fontSize: 15 }}>
            {followers}
          </div>
          <div style={{ fontSize: 15 }}>
            {minute}
          </div>

        </div>
      </div>
      <div style={{ fontSize: 15, padding: 5 }}>
        {content}
      </div>
    </div>
  </div>
}

export default App

