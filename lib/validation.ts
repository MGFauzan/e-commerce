import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nama minimal 2 karakter")
    .max(100, "Nama maksimal 100 karakter")
    .regex(/^[a-zA-Z\s\u00C0-\u024F]+$/, "Nama hanya boleh huruf"),
  email: z
    .string()
    .email("Format email tidak valid")
    .max(200, "Email terlalu panjang"),
  subject: z
    .string()
    .min(5, "Subject minimal 5 karakter")
    .max(200, "Subject maksimal 200 karakter"),
  message: z
    .string()
    .min(20, "Pesan minimal 20 karakter")
    .max(2000, "Pesan maksimal 2000 karakter"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const orderSchema = z.object({
  name: z
    .string()
    .min(2, "Nama minimal 2 karakter")
    .max(100, "Nama terlalu panjang"),
  email: z
    .string()
    .email("Format email tidak valid"),
  phone: z
    .string()
    .regex(/^(\+62|0)[0-9]{8,13}$/, "Format nomor HP tidak valid")
    .optional()
    .or(z.literal("")),
  serviceIds: z
    .array(z.string())
    .min(1, "Pilih minimal 1 layanan"),
  details: z
    .string()
    .min(30, "Detail project minimal 30 karakter")
    .max(3000, "Detail terlalu panjang"),
  deadline: z.string().optional(),
  budget: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type OrderFormValues = z.infer<typeof orderSchema>;
