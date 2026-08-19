"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";

const FIELDS = [
  { name: "nama", label: "Nama", type: "text", required: true },
  { name: "perusahaan", label: "Perusahaan", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "whatsapp", label: "WhatsApp", type: "tel", required: false },
  { name: "kota", label: "Kota", type: "text", required: false },
  { name: "jenisBisnis", label: "Jenis Bisnis", type: "select", required: true },
] as const;

const BIZ_TYPES = [
  "Distributor IFP",
  "Reseller",
  "System Integrator",
  "Education Technology Partner",
  "Lainnya",
];

/**
 * Lead form partner. API-ready: saat backend tersedia, POST payload ke
 * endpoint partner; saat ini hanya menyimpan ke state + mengirim event.
 */
export function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    track("partner_form_submit", { name: String(payload.nama ?? "") });
    // TODO: kirim payload ke POST /api/partner (integrasi backend/CRM)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-success/30 bg-emerald-50 p-8 text-center">
        <p className="text-lg font-bold text-emerald-800">Terima kasih sudah mendaftar!</p>
        <p className="mt-2 text-sm text-emerald-700">
          Tim kami akan segera menghubungi Anda. (Form masih placeholder — integrasi backend menyusul.)
        </p>
      </div>
    );
  }

  return (
    <form id="partner-form" onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      {FIELDS.map((field) => (
        <label key={field.name} className="flex flex-col gap-1.5 sm:col-span-1">
          <span className="text-sm font-medium text-ink-soft">
            {field.label}
            {field.required ? <span className="text-error"> *</span> : null}
          </span>
          {field.type === "select" ? (
            <select
              name={field.name}
              required={field.required}
              className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink focus-visible:outline-primary"
            >
              <option value="">Pilih jenis bisnis</option>
              {BIZ_TYPES.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              placeholder={field.label}
              className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline-primary"
            />
          )}
        </label>
      ))}
      <label className="flex flex-col gap-1.5 sm:col-span-2">
        <span className="text-sm font-medium text-ink-soft">Pesan</span>
        <textarea
          name="pesan"
          rows={3}
          placeholder="Ceritakan kebutuhan Anda"
          className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline-primary"
        />
      </label>
      <div className="sm:col-span-2">
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          Daftar sebagai Partner
        </Button>
      </div>
    </form>
  );
}