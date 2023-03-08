import { Flex, Text, Box, Container, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { feedStore } from "../../controllers/FeedStore";

const FeedView = observer(() => {
  const notes = feedStore.notes;
  return (
    <Box w="100%" p="32px" bg="#F2F3F4">
      {notes.map((note) => (
        <Text wordBreak="break-all">{note}</Text>
      ))}
    </Box>
  );
});

export default FeedView;
