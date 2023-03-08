import {
  Button,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import _ from "lodash";
import { useState } from "react";

const Settings = () => {
  const [relays, setRelays] = useState<string[]>([]);
  const [inputRelayName, setInputRelayValue] = useState("");
  const onRelayNameChange = (event: any) =>
    setInputRelayValue(event.target.value);

  const toast = useToast();

  function addRelay() {
    //duplicate relay addition
    if (relays.includes(inputRelayName)) {
      toast({
        title: "Duplicate Relay",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newRelays = [inputRelayName, ...relays];
    setRelays(newRelays);
  }

  function removeRelay(index: number) {
    const newRelays = [...relays];
    newRelays.splice(index, 1);
    setRelays(newRelays);
  }

  return (
    <VStack>
      <Input
        value={inputRelayName}
        onChange={onRelayNameChange}
        placeholder="Relay Name"
      />
      <Button isDisabled={_.isEmpty(inputRelayName)} onClick={addRelay}>
        Add Relay
      </Button>
      <AnimatePresence>
        {relays.map((relay, index) => (
          <RelayItem
            key={relay}
            name={relay}
            remove={() => removeRelay(index)}
          />
        ))}
      </AnimatePresence>
    </VStack>
  );
};

export default Settings;

interface RelayItemProps {
  name: string;
  remove: () => void;
}

const RelayItem = ({ name, remove }: RelayItemProps) => {
  return (
    <HStack>
      <Text>{name}</Text>
      <Button onClick={remove}>Remove</Button>
    </HStack>
  );
};
