import React, { useEffect, useState } from "react";
import LisateTransaction from "./LisateTransaction";
import Api from "../../services/clientService";


function Transaction() {
  const [transaction, setTransaction] = useState([]);
  const [listClient, setListClient] = useState([]);
  const [transactionAdd, setTransactionAdd] = useState([]);

  // ****************************** AFFICHEGE ************************
  const affichageTransaction = async () => {
    const response = await Api.get("/transaction");
    console.log('response',response.data);
    return response.data;
  };
  const getAllTransaction = async () => {
    const allTransaction = await affichageTransaction();
    if (allTransaction) setTransaction(allTransaction);
  };
  // console.log('transaction', transaction);
  useEffect(() => {
    getAllTransaction();
    recupererListClient();
    console.log(listClient);
  }, []);

  // recuperer la liste de clients **************************
  const recupererListClient = async () => {
    const response = await Api.get("/client");
    if (response.data) setListClient(response.data);
  };

// ********************************** AJOUT **************************
const recupereTransaction = (formDataT) => {
  setTransactionAdd(formDataT);
  console.log('transaction ho add',transactionAdd);
};

const ajouteTransaction = async () => {
  
  try {
    const response = await Api.post("/transaction", transactionAdd);
    getAllTransaction();
    const res = response.data.date;
    if(res == "existdata"){
      console.log("Transaction existe déjà !!");
    }else{
      console.log("Ajout avec succès !");
    }
    
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  if (transactionAdd) {
    ajouteTransaction();
    }
}, [transactionAdd]);
  

  
  // ********************************* SUPPRESSION ***************************
  const deleteTransaction = (transaction_id) => {
    // console.log('to delete:',transaction_id);
    Api
      .delete(`/transaction/${transaction_id}`)
      .then((response) => {
        const updatedTransaction = transaction.data.filter(
          (transaction) => transaction.transaction_id !== transaction_id
        );
        setTransaction({ ...transaction, data: updatedTransaction });
        console.log("Transaction deleted successfully!");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <LisateTransaction 
      transaction={transaction}
      listClient={listClient}
      recupereTransaction={recupereTransaction}
      deleteTransaction={deleteTransaction}
      />
    </>
  );
}

export default Transaction;
