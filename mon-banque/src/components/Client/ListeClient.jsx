// import { Link } from "react-router-dom";

const ListeClient = ({ clients, loading }) => {

  return (
    <div className='py-5'>
      {loading && <p>loading ...</p>}
      {clients &&
        <ul>
          {Array.isArray(clients.data) && (clients.data.map(({client_id, nom, adresse, type}) =>
            <li className='flex justify-between border-b-4' key={client_id}>
              <div className="flex ">
                <p className='my-3 px-3'>{nom}</p>
                <p className='my-3 px-3'>{adresse}</p>
                <p className='my-3 px-3'>{type}</p>
              </div>
              <div>
               
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default ListeClient;