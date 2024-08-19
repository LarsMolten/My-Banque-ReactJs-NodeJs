import React, { useEffect, useState } from "react";
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
  IconButton,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";

function EditeModal({
  IdSelect,
  IdclientSelected,
  clientSelected,
  EditClient,
}) {
  const [formDataE, setFormDataE] = useState({
    nom: "",
    email: "",
    adresse: "",
    type_client: "",
  });

  // ouvertur Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen((cur) => !cur);
    IdclientSelected(IdSelect);
    console.log(clientSelected);
  };
  const handleCancelEdit = () => {
    setFormDataE({
      nom: "",
      email: "",
      adresse: "",
      type_client: "",
    });
    handleOpen();
  };

  // affichage de données dans les formulaires
  useEffect(() => {
    if (clientSelected) {
      const dateArray = clientSelected.date;

      if (Array.isArray(dateArray) && dateArray.length > 0) {
        const clientData = dateArray[0];
        setFormDataE({
          nom: clientData.nom,
          email: clientData.email,
          adresse: clientData.adresse,
          type_client: clientData.type_client,
        });
      }
    }
  }, [IdclientSelected]);

  // recupération de données du formulaire
  const handleChangeE = (e) => {
    const { name, value } = e.target;
    setFormDataE({ ...formDataE, [name]: value });
  };

  const handleChangesE = (e) => {
    setFormDataE({ ...formDataE, type_client: e });
  };

  // envoie de données
  const handleSubmit = () => {
    console.log("formDataE donnée halefa", formDataE);
    EditClient(formDataE);
    setFormDataE({
      nom: "",
      email: "",
      adresse: "",
      type_client: "",
    });
    handleOpen();
  };

  return (
    <>
      <IconButton variant="text" onClick={handleOpen}>
        <PencilIcon className="h-4 w-4" />
      </IconButton>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Edite Client
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Veuillez remplir les champs!
            </Typography>

            <Input
              label="Nom"
              size="lg"
              name="nom"
              value={formDataE.nom}
              onChange={handleChangeE}
              required
            />
            <Input
              label="E-mail"
              size="lg"
              name="email"
              value={formDataE.email}
              onChange={handleChangeE}
              required
            />
            <Input
              label="Adresse"
              size="lg"
              name="adresse"
              value={formDataE.adresse}
              onChange={handleChangeE}
              required
            />
            <Select
              label="Type"
              name="type_client"
              value={formDataE.type_client}
              onChange={handleChangesE}
              aria-required
            >
              <Option value="individu">Individu</Option>
              <Option value="societe">Société</Option>
            </Select>
          </CardBody>
          <CardFooter className="pt-0 gap-4 flex">
            <Button variant="outlined" onClick={handleCancelEdit} fullWidth>
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
}

export default EditeModal;
