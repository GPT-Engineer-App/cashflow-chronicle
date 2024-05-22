import { Box, Container, Flex, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="3" p={4}>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/news1.jpg" alt="News 1" />
              <Box p={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Latest News Headline 1
                </Text>
                <Text mt={2}>Brief description of the news article...</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/news2.jpg" alt="News 2" />
              <Box p={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Latest News Headline 2
                </Text>
                <Text mt={2}>Brief description of the news article...</Text>
              </Box>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} borderLeftWidth={{ base: 0, md: "1px" }} borderTopWidth={{ base: "1px", md: 0 }}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Financial Data
          </Text>
          <Box>
            <Text>Stock Market Updates</Text>
            <Text>Dow Jones: 34,000.00</Text>
            <Text>NASDAQ: 14,000.00</Text>
            <Text>S&P 500: 4,200.00</Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;