// Centralized WhatsApp links for Ewa Beauty Experience
const BASE = "https://wa.me/595984411521?text=";

const build = (message: string) => BASE + encodeURIComponent(message);

export const WHATSAPP = {
  general: build(
    "Hola buenas, quiero consultar por un turno en Ewa Beauty Experience"
  ),
  peinados: build(
    "Hola buenas, quiero consultar por peinados especiales en Ewa Beauty Experience"
  ),
  unas: build(
    "Hola buenas, quiero consultar por uñas en Ewa Beauty Experience"
  ),
  brushing: build(
    "Hola buenas, quiero consultar por brushing o secado en Ewa Beauty Experience"
  ),
  corte: build(
    "Hola buenas, quiero consultar por corte en Ewa Beauty Experience"
  ),
  novia: build(
    "Hola buenas, quiero consultar por peinado de novia en Ewa Beauty Experience"
  ),
  quinceanera: build(
    "Hola buenas, quiero consultar por peinado de quinceañera en Ewa Beauty Experience"
  ),
};

export const CONTACT = {
  phone: "+595 984 411521",
  whatsappNumber: "595984411521",
  email: "jacintanailsbar@gmail.com",
  address: "M94P+G99, Av. Cacique Lambaré, Lambaré, Paraguay",
  schedule: "09:00 – 20:00",
  category: "Salón de uñas, Belleza, cosmética y cuidado personal",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=M94P%2BG99+Av.+Cacique+Lambar%C3%A9+Lambar%C3%A9+Paraguay",
  emailUrl: "mailto:jacintanailsbar@gmail.com",
};
