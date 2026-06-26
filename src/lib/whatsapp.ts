export const WHATSAPP_NUMBER = "919748171789";
export const PHONE_DISPLAY = "+91 9748171789";
export const PHONE_TEL = "+91 9748171789";
export const BRAND = "Doctor AC Services";

export function waLink(message?: string) {
  const text = message ?? `Hi ${BRAND}, I'd like to book an AC service.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
