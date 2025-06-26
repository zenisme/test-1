


export default class BaseService {
    private baseUrl: string = "http://localhost:8000/api";

    async get(url: string) {
        
        const response = await fetch(`${this.baseUrl}${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        });
        return response.json();
    }

    async post(url: string, data: any) {
        const response = await fetch(`${this.baseUrl}${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }

    async put(url: string, data: any) {
        const response = await fetch(`${this.baseUrl}${url}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            method: "PUT",
            body: JSON.stringify(data),
        });
        return response.json();
    }

    
    async patch(url: string, data: any) {
        const response = await fetch(`${this.baseUrl}${url}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            method: "PATCH",
            body: JSON.stringify(data),
        });
        return response.json();
    }

    async delete(url: string) {
        const response = await fetch(`${this.baseUrl}${url}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            method: "DELETE",
        });
        return response.json();
    }
}