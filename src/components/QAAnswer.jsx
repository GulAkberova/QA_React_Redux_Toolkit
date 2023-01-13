import { Box } from "@chakra-ui/react";
import React from "react";

import { useDispatch, useSelector } from "react-redux";


function QAAnswer() {
  const questions=useSelector(state=>state.questions)

  console.log(questions.questions)

  return (
    <>
   <Box display={'flex'} justifyContent='flex-end'>
   <Box border={' 1px solid rgba(255, 255, 255, 0.314)'} my='16px' borderRadius={'7px'} py='10px' px={'10px'} w='95%'>
    {questions.questions &&
       questions.questions?.map((i) =>
       (
          <div>

            

            {
               i.answers &&  i.answers?.map(j=>
        (
                    <h6>{j.answer}</h6>

                ))
             }
          </div>
        ))}

    </Box>
   </Box>

    </>
  );
}

export default QAAnswer;
