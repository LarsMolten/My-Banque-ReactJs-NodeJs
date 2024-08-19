import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

const AddModaleTrans = ({ listClient, getTransactionToAdd }) => {
  // const liste = () => {console.log(listClient);};
  let cli = null;
  const [formDataT, setFormDataT] = useState({
    client: cli,
    type_transaction: "",
    montant: "",
  });
  // ouvertur Modal
  const [openT, setOpenT] = React.useState(false);
  const handleOpenT = () => setOpenT((cur) => !cur);

  // recuperation de données via formulaire
  const handleChangeT = (e) => {
    const { name, value } = e.target;
    if (e.target) {
      setFormDataT({ ...formDataT, [name]: value });
    }
  };
  const handleChangesC = (key) => {
    console.log(key);
    setFormDataT({ ...formDataT, client: key });
  };
  const handleChangesT = (e) => {
    setFormDataT({ ...formDataT, type_transaction: e });
  };

  //   envoie de données
  const handleSubmit = () => {
    console.log("formDataT @ modal ajout trans:", formDataT);
    getTransactionToAdd(formDataT);
    setFormDataT({
      client: "",
      type_transaction: "",
      montant: "",
    });
    handleOpenT();
  };

  const handleCancelT = () => {
    setFormDataT({
      client: "",
      type_transaction: "",
      montant: "",
    });
    handleOpenT();
  };

  return (
    <>
      <Button onClick={handleOpenT}>Nouveau</Button>
      <Dialog
        size="xs"
        open={openT}
        handler={handleOpenT}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Nouveau Transaction
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Veuillez remplir les champs!
            </Typography>

            <Select
              label="Client"
              name="client"
              value={formDataT.client}
              onChange={handleChangesC}
              required
            >
              {Array.isArray(listClient.data) &&
                listClient.data.map(({ client_id, nom }) => (
                  <Option key={client_id} value={client_id} >
                    {client_id}__{nom}
                  </Option>
                ))}
            </Select>

            <Select
              label="Type"
              name="type_transaction"
              value={formDataT.type_transaction}
              onChange={handleChangesT}
              aria-required
            >
              <Option value="dépôt">Dépôt</Option>
              <Option value="virement">Virement</Option>
            </Select>

            <Input
              label="Montant"
              size="lg"
              name="montant"
              value={formDataT.montant}
              onChange={handleChangeT}
              required
            />
          </CardBody>
          <CardFooter className="pt-0 gap-4 flex">
            <Button variant="outlined" onClick={handleCancelT} fullWidth>
              Annuler
            </Button>
            <Button variant="gradient" onClick={handleSubmit} fullWidth>
              OK
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default AddModaleTrans;
