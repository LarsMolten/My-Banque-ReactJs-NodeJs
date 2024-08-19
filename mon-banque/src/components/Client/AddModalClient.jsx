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
  list,
} from "@material-tailwind/react";

function AddModalClient({ listClient }) {
  const liste = () => {alert(listClient)}

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    adresse: "",
    type_client: "",
  });
  // ouvertur Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  // recuperation de données via formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target) {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleChanges = (e) => {
    setFormData({ ...formData, type_client: e });
  };

  // envoie de données
  const handleSubmit = () => {
    console.log("formData @ modal:", formData);
    addClient(formData);
    console.log();
    setFormData({
      nom: "",
      email: "",
      adresse: "",
      type_client: "",
    });
    handleOpen();
  };

  const handleCancel = () => {
    setFormData({
      nom: "",
      email: "",
      adresse: "",
      type_client: "",
    });
    handleOpen();
  };
  return (
    <>
      <Button onClick={liste}>Ajouter</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Nouveau Client
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
              value={formData.nom}
              onChange={handleChange}
              required
            />
            <Input
              label="e-mail"
              size="lg"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Adresse"
              size="lg"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              required
            />
            <Select
              label="Type"
              name="type_client"
              value={formData.type_client}
              onChange={handleChanges}
              aria-required
            >
              <Option value="individu">Individu</Option>
              <Option value="société">Société</Option>
            </Select>
          </CardBody>
          <CardFooter className="pt-0 gap-4 flex">
            <Button variant="outlined" onClick={handleCancel} fullWidth>
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

export default AddModalClient;
