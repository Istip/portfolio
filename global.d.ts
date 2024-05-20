import { Timestamp } from "firebase/firestore";

declare global {
  export interface Message {
    id?: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    created: Timestamp;
    seen: boolean;
    removed?: boolean;
  }
}

export {};
