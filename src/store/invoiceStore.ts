import { create } from 'zustand';

type InvoiceItem = {
    name: string;
    quantity: number;
    price: number;
};

type InvoiceState = {
    client: string;
    issueDate: string;
    items: InvoiceItem[];
    setClient: (client: string) => void;
    addItem: (item: InvoiceItem) => void;
};

export const useInvoiceStore = create<InvoiceState>((set) => ({
    client: '',
    issueDate: '',
    items: [],
    setClient: (client) => set({ client }),
    addItem: (item) =>
        set((state) => ({ items: [...state.items, item] })),
}));
