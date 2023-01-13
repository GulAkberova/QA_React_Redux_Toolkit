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
  Flex,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { add, answer } from "../store/qaSlice";
import QAAnswer from "./QAAnswer";

function QAText() {
  const dispatch=useDispatch()
  const questions=useSelector(state=>state.questions)
  // console.log(questions)
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  
   
  };
  const handleAdd=(item)=>{
    console.log(item)
    let updateValue={
      id:item.id,
      question:item.question,
      answers: [{value}]
    }
    // console.log(updateValue);

    dispatch(answer(updateValue))

  }
  // console.log(questions)

  // let data = [
  //   {
  //     id: 1,
  //     questions: "data1",
  //     answers: [
  //       {
  //         answer: "dw23b",
  //       },
  //       { answer1: "sefer" },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     questions: "hbhfbvfd",
  //     answers: [],
  //   },
  // ];
  // console.log(questions.questions[0].answers.answers);
  return (
    <>
     <Box border={'1px solid white'} borderRadius='7px' my={'20px'} py='10px' px={'10px'}>
     {questions.questions &&
       questions.questions?.map((i) =>
       (
          <div>

            
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  backgroundColor="#0D2322"  color={'white'}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text mb="8px"></Text>
            <Text mb="8px">Value: {value}</Text>
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
            <Button bgColor={'transparent'} border='1px solid white'  _hover={{backgroundColor:"#133331"}}  my='15px' onClick={()=>handleAdd(i)}>Button</Button>
          </ModalBody>
        
        </ModalContent>
      </Modal>
          <Box>
           
              <Center >  <Text fontSize='2xl'>{i.question}</Text> <Spacer/>
            <Button onClick={onOpen}  bgColor={'transparent'} border=' 1px solid rgba(255, 255, 255, 0.314)' _hover={{backgroundColor:"#0D2322"}}>+ Answer</Button></Center>
         
          </Box>
            {/* {
               i.answers &&  i.answers?.map(j=>
        (
                    <h6>{j.answer}</h6>

                ))
             } */}
             <QAAnswer/>
          </div>
        ))}

     </Box>

    </>
  );
}

export default QAText;
