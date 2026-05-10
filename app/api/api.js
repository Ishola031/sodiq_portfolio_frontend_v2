import { useState } from "react";

export default async function getServices() {
    console.log('fetch')
    const res = await fetch(`http://127.0.0.1:8000/api/serviceapi/`, {
        next: {
            revalidate: 300,
        },
    });

    return res.json();
}

export async function getProjects(category) {
    const url =
        category === "All"
            ? `http://127.0.0.1:8000/api/projectapi/`
            : `http://127.0.0.1:8000/api/projectapi/?category=${category}`;

    const res = await fetch(url, {
        next: {
            revalidate: 300,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }
    return res.json();
}