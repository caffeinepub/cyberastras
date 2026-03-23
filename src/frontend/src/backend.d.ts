import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: bigint;
    title: string;
    publishedAt: Time;
    author: string;
    excerpt: string;
    category: string;
}
export interface Inquiry {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    addBlogPost(title: string, category: string, excerpt: string, author: string): Promise<bigint>;
    deleteBlogPost(id: bigint): Promise<void>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getBlogPostCount(): Promise<bigint>;
    getLatestBlogPosts(limit: bigint): Promise<Array<BlogPost>>;
    submitInquiry(name: string, email: string, message: string): Promise<void>;
}
