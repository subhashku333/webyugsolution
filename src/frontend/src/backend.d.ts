import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    name: string;
    email: string;
    serviceInterest: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    isSubscribed(email: string): Promise<boolean>;
    submitContactForm(name: string, email: string, phone: string, serviceInterest: string, message: string, timestamp: bigint): Promise<void>;
    subscribeToNewsletter(email: string): Promise<void>;
}
