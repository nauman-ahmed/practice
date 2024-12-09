import { useState } from "react"

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

interface UserProps {
    userData?: TUserData[];
}
  
const User: React.FC<UserProps> = ({ userData }) => {
      
    return (
        
        <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">User List</h2>
        {
          userData?.map((user, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-lg mb-2 shadow-md w-80"
            >
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>
              <p>
                <strong>Company:</strong> {user.company.name}
              </p>
              <p>
                <strong>Address:</strong> {user.address.street}, {user.address.city}
              </p>
            </div>
          ))
        }
      </div>
    )
}

export default User