import { create } from "zustand";

type BankInfoKey = "bankName" | "branch" | "accountNumber" | "accountHolder";

interface InvoiceState {
    clientName: string;
    issueDate: string;
    dueDate: string;
    invoiceNumber: string;
    taxRate: number;
    discount: number;
    bankName: string;
    branch: string;
    accountNumber: string;
    accountHolder: string;
    notes: string;
    setClientName: (v: string) => void;
    setIssueDate: (v: string) => void;
    setDueDate: (v: string) => void;
    setInvoiceNumber: (v: string) => void;
    setTaxRate: (v: number) => void;
    setDiscount: (v: number) => void;
    setBankInfo: (key: BankInfoKey, value: string) => void;
    setNotes: (v: string) => void;
}

export const useInvoiceStore = create<InvoiceState>((set) => ({
    clientName: "",
    issueDate: "",
    dueDate: "",
    invoiceNumber: "",
    taxRate: 10,
    discount: 0,
    bankName: "",
    branch: "",
    accountNumber: "",
    accountHolder: "",
    notes: "",
    setClientName: (v) => set({ clientName: v }),
    setIssueDate: (v) => set({ issueDate: v }),
    setDueDate: (v) => set({ dueDate: v }),
    setInvoiceNumber: (v) => set({ invoiceNumber: v }),
    setTaxRate: (v) => set({ taxRate: v }),
    setDiscount: (v) => set({ discount: v }),
    setBankInfo: (key, value) => set((state) => ({ ...state, [key]: value })),
    setNotes: (v) => set({ notes: v }),
}));
