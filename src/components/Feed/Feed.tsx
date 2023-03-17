import { Flex, Text, Box, Container, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { feedStore } from "../../controllers/FeedStore";

const FeedView = observer(() => {
  const notes = feedStore.notes;
  return (
    <Box w="100%" p="32px">
      {notes.map((note) => (
        <Text wordBreak="break-all">{note}</Text>
      ))}
    </Box>
  );
});

export default FeedView;
