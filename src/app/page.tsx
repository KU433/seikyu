'use client'

import { Button, Box, Text } from '@chakra-ui/react'

export default function Home() {
  return (
      <Box p={8}>
        <Text fontSize="2xl" mb={4}>✅ Chakra UI is working!</Text>
        <Button colorScheme="teal">Click Me</Button>
      </Box>
  )
}

