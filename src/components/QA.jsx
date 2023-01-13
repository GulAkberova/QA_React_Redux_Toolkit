import React from "react";
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
  Text,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/qaSlice";
import QAText from "./QAText";

function QA() {
  const dispatch=useDispatch()
  const questions=useSelector(state=>state.questions)

  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  
   
  };
  const handleAdd=()=>{
    let newValue={
      id:Math.floor(Math.random() * 9999),
      question: value
    }
    dispatch(add(newValue))
    onClose()

  }
  // console.log(questions)


  return (
    <>
      <Box height={'100vh'} bgColor={'#133331'} display={"flex"} flexDirection={'column'} justifyContent={'center'} px='50px' color={'white'}>
      <Button onClick={onOpen} bgColor={'transparent'} border='1px solid white' _hover={{backgroundColor:"#0D2322"}}>
        + Add Comment
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  backgroundColor="#0D2322"  color={'white'}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="8px">Value: {value}</Text>
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
            <Button  bgColor={'transparent'} border='1px solid white'  _hover={{backgroundColor:"#133331"}} onClick={()=>handleAdd()} my='15px'>Button</Button>
          </ModalBody>
        
        </ModalContent>
      </Modal>
  <QAText/>

      </Box>

    </>
  );
}

export default QA;
