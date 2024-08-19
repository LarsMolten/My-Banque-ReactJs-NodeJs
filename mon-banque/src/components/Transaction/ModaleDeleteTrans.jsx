import React, {useState} from 'react';
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
  import { TrashIcon } from "@heroicons/react/24/solid";

function ModaleDeleteTrans({transaction_id, getTransactionToDelete}) {
    // console.log('à supprimer',transaction_id);
    const [openT, setOpenT] = useState(false);

    const toggleModalTrans = () => setOpenT(!openT);

  return (
    <>
      <IconButton variant="text" onClick={toggleModalTrans} >
        <TrashIcon className="h-4 w-4" />
      </IconButton>
      <Dialog
        size="xs"
        open={openT}
        handler={toggleModalTrans}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col items-center gap-4">
            <TrashIcon className="h-8 w-8 " color="red"  />
            <Typography
              className="mb-3 font-bold text-center"
              variant="lead"
              color="gray"
            >
              Voulez-vous le supprimer ?
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 gap-4 flex">
            <Button variant="outlined" onClick={toggleModalTrans} fullWidth>
              Annuler
            </Button>
            <Button variant="gradient" onClick={() => getTransactionToDelete(transaction_id)} fullWidth>
              OK
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  )
}

export default ModaleDeleteTrans
