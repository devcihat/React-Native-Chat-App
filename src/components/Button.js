import React from "react";
import { Button, NativeBaseProvider } from "native-base";
export const Example = (props) => {
  return <Button size={20} style={{borderRadius:30,height:52,width:146}} onPress={() => console.log("hello world")}>Log In</Button>
};

export default Deneme = () => {
  return (
    <NativeBaseProvider>
      <Example />
    </NativeBaseProvider>
  );
};
