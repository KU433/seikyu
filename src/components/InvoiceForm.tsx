// src/components/InvoiceForm.tsx
"use client";

import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    NumberInput,
    NumberInputField,
    VStack,
    Heading,
    Divider,
} from "@chakra-ui/react";
import { useInvoiceStore } from "@/store/invoiceStore";

export default function InvoiceForm() {
    const {
        clientName,
        issueDate,
        dueDate,
        invoiceNumber,
        taxRate,
        discount,
        bankName,
        branch,
        accountNumber,
        accountHolder,
        notes,
        setClientName,
        setIssueDate,
        setDueDate,
        setInvoiceNumber,
        setTaxRate,
        setDiscount,
        setBankInfo,
        setNotes,
    } = useInvoiceStore();

    return (
        <Box p={6}>
            <Heading size="lg" mb={4}>請求書入力フォーム</Heading>
            <VStack spacing={4} align="stretch">
                <FormControl>
                    <FormLabel>請求先名</FormLabel>
                    <Input value={clientName} onChange={(e) => setClientName(e.target.value)} />
                </FormControl>

                <Flex gap={4}>
                    <FormControl>
                        <FormLabel>請求日</FormLabel>
                        <Input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>支払期限</FormLabel>
                        <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    </FormControl>
                </Flex>

                <FormControl>
                    <FormLabel>請求書番号</FormLabel>
                    <Input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                </FormControl>

                <Divider />

                <Flex gap={4}>
                    <FormControl>
                        <FormLabel>税率 (%)</FormLabel>
                        <NumberInput value={taxRate} onChange={(_, v) => setTaxRate(v)}>
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>
                    <FormControl>
                        <FormLabel>割引 (円)</FormLabel>
                        <NumberInput value={discount} onChange={(_, v) => setDiscount(v)}>
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>
                </Flex>

                <Divider />

                <Heading size="md" mt={4}>振込先情報</Heading>
                <FormControl>
                    <FormLabel>銀行名</FormLabel>
                    <Input value={bankName} onChange={(e) => setBankInfo("bankName", e.target.value)} />
                </FormControl>
                <FormControl>
                    <FormLabel>支店名</FormLabel>
                    <Input value={branch} onChange={(e) => setBankInfo("branch", e.target.value)} />
                </FormControl>
                <FormControl>
                    <FormLabel>口座番号</FormLabel>
                    <Input value={accountNumber} onChange={(e) => setBankInfo("accountNumber", e.target.value)} />
                </FormControl>
                <FormControl>
                    <FormLabel>口座名義</FormLabel>
                    <Input value={accountHolder} onChange={(e) => setBankInfo("accountHolder", e.target.value)} />
                </FormControl>

                <FormControl>
                    <FormLabel>備考</FormLabel>
                    <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
                </FormControl>

                <Button colorScheme="blue">保存</Button>
            </VStack>
        </Box>
    );
}
