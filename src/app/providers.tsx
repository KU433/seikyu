'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@emotion/react'
import React, { ReactNode } from 'react'
import emotionCache from '../lib/emotionCache'

export function Providers({ children }: { children: ReactNode }) {
    return (
        <CacheProvider value={emotionCache}>
            <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
    )
}
