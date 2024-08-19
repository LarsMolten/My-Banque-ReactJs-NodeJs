import { useEffect, useState } from "react";
import api from "../../services/clientService";
import ClientList from "./ClientListe";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [clientAdd, setClientAdd] = useState();
  const [clientSelected, setClientSelected] = useState();
  const [geterIdClients, setGeterIdClients] = useState();
  const [clientEditer, setClientEditer] = useState();

  // ****************************** AFFICHEGE ************************
  const affichageClient = async () => {
    const response = await api.get("/client");
    // console.log(response.data);
    return response.data;
  };
  const getAllClients = async () => {
    const allClients = await affichageClient();
    if (allClients) setClients(allClients);
  };
  useEffect(() => {
    getAllClients();
  }, []);

  // ********************************** AJOUT **************************
  const recupereClient = (formData) => {
    setClientAdd(formData);
    // console.log('client ho add',clientAdd);
  };

  const ajouteClient = async () => {
    
    try {
      const response = await api.post("/client", clientAdd);
      getAllClients();
      const res = response.data.date;
      if(res == "existdata"){
        console.log("Client existe déjà !!");
      }else{
        console.log("Ajout avec succès !");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (clientAdd) {
      ajouteClient();
      }
  }, [clientAdd]);

  // ********************************* SUPPRESSION ***************************
  const deleteClient = (client_id) => {
    api
      .delete(`/client/${client_id}`)
      .then((response) => {
        const updatedClients = clients.data.filter(
          (client) => client.client_id !== client_id
        );
        setClients({ ...clients, data: updatedClients });
        console.log("Client deleted successfully!");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // *************************** SELECTION EDITE ******************************
  const getClientSelected = async (id) => {
    const response = await api.get(`/client/${id}`);
    setClientSelected(response.data);
    setGeterIdClients(id);
    // console.log("Le voici:", id);
  };
  // ************************** EDITER ********************************
  const recupereEdite = (edit) => {
    setClientEditer(edit);
    console.log(clientEditer);
  };

  const editeClient = async () => {
    // console.log('geterIdClient', geterIdClients);
    // console.log('clientEditer', clientEditer);
    try {
      const response = await api.put(`/client/${geterIdClients}`, clientEditer);
      console.log('modification avec succès!');
      console.log(response);
      getAllClients();
    } catch (error) {
      console.log("Erreur lors de la modification du clients :", error);
    }
  };
 
  useEffect(()=>{
    if(clientEditer){
      editeClient();
    }
  },[clientEditer])

  return (
    <div>
      <ClientList
        clients={clients}
        recupereClient={recupereClient}
        getClientSelected={getClientSelected}
        clientSelected={clientSelected}
        recupereEdite={recupereEdite}
        deleteClient={deleteClient}
      />
    </div>
  );
};

export default Clients;
