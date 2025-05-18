import { useInvoiceStore } from "@/store/invoiceStore";
import { Input } from "@chakra-ui/react";

export function InvoiceForm() {
    const client = useInvoiceStore((state) => state.client);
    const setClient = useInvoiceStore((state) => state.setClient);

    return (
        <Input
            placeholder="請求先名"
            value={client}
            onChange={(e) => setClient(e.target.value)}
        />
    );
}
