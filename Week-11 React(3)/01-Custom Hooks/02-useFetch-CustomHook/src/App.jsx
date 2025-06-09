
import { useFetchPostTitle } from './customHook/useFetch.jsx'
function App() {
  const postTitle = useFetchPostTitle()

  return (
    <div>
      {postTitle}
    </div>
  )
}



export default App
