import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

import User from './components/card'

type TGeo = {
  lat: string,
  lng: string
}
type TAddress = {
  city:string,
  street:string,
  suite:string,
  zipcode:string,
  geo:TGeo
}
type TCompany = {
  bs:string,
  catchPhrase:string,
  name:string,
}
type TUserData = {
  email:string,
  name:string,
  phone:string,
  username:string,
  website:string,
  address:TAddress,
  company:TCompany
}
function App() {

  const [userData, setUserData] = useState<TUserData[]>()

  const getData = async () => {
    const response = await axios.get<TUserData[]>("https://jsonplaceholder.typicode.com/users")
    console.log("Response", response)
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <User userData={userData}/>
      </div>
    </>
  )
}

export default App
