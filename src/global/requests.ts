import { FormEvent } from "react"

type Request = { method: 'GET' | 'POST'; params?: Object | any[] }

const respond = async (request: Request, controller: string) => {

  const url = new URL(`http://localhost:3000/${controller}`);

  if (request.method === "GET" && request.params) {
    if (Array.isArray(request.params)) {
      // If it's an array, we separate elements with comma
      url.searchParams.append("ids", request.params.join(","));
    } else {
      Object.entries(request.params).forEach(([key, value]) => {
        url.searchParams.append(key, JSON.stringify(value));
      });
    }
  }

  const response = await fetch(url.toString(), {
    method: request.method,
    ...(request.method === 'POST' && {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request.params),
    })
  });


  const deserializedResponse = await response.json();
  return deserializedResponse
}

export { respond }