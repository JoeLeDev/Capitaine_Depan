import type { LucideIcon } from "lucide-react";
import {
  DoorOpen,
  KeyRound,
  Lock,
  Shield,
  Wrench,
  Home,
} from "lucide-react";

export type ServiceItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

export const services: ServiceItem[] = [
  {
    id: "depannage",
    icon: Wrench,
    title: "Dépannage d'urgence",
    description:
      "Porte claquée, clé cassée, serrure bloquée ou effraction : intervention rapide sur Paris et toute l'Île-de-France.",
    highlights: [
      "Ouverture de porte sans dégât dans la mesure du possible",
      "Remplacement de cylindre sur place",
      "Disponible 24h/24 et 7j/7",
    ],
  },
  {
    id: "ouverture",
    icon: DoorOpen,
    title: "Ouverture de porte",
    description:
      "Intervention soignée pour retrouver l'accès à votre logement ou local professionnel en toute sécurité.",
    highlights: [
      "Appartement, maison, cave, garage",
      "Techniques adaptées au type de porte",
      "Devis transparent avant intervention",
    ],
  },
  {
    id: "changement",
    icon: KeyRound,
    title: "Changement de serrure",
    description:
      "Remplacement ou mise à niveau de votre système de fermeture après perte de clés, déménagement ou sinistre.",
    highlights: [
      "Cylindre, barillet, serrure multipoints",
      "Marques reconnues et pièces de qualité",
      "Conseil sur le niveau de sécurité adapté",
    ],
  },
  {
    id: "blindage",
    icon: Shield,
    title: "Blindage & sécurisation",
    description:
      "Renforcement de porte d'entrée et solutions anti-effraction pour protéger votre domicile.",
    highlights: [
      "Blindage de porte existante",
      "Porte blindée et accessoires",
      "Audit sécurité à domicile",
    ],
  },
  {
    id: "installation",
    icon: Lock,
    title: "Installation serrurerie",
    description:
      "Pose de serrures, verrous, organigrammes et équipements pour particuliers et professionnels.",
    highlights: [
      "Serrures certifiées A2P",
      "Installation conforme aux normes",
      "Garantie sur la main-d'œuvre",
    ],
  },
  {
    id: "copropriete",
    icon: Home,
    title: "Copropriété & syndic",
    description:
      "Interventions sur parties communes, boîtes aux lettres, locaux techniques et accès sécurisés.",
    highlights: [
      "Badges, digicodes, portes palières",
      "Contrats d'entretien sur demande",
      "Facturation claire pour syndics",
    ],
  },
];
