import { http, HttpResponse } from "msw";

// Visit Documentation at: https://mswjs.io/docs/network-behavior/rest#reading-request-body
export const handlers = [
  // Define a GET route for '/api/users'
  http.get("/api/users", () => {
    return HttpResponse.json(
      [
        { id: 1, name: "Jonathan" },
        { id: 2, name: "Fuka" },
        { id: 2, name: "Madeleine" },
      ],
      { status: 200 }
    );
  }),

  // Define a POST route for '/api/login'
  http.post("/api/login", async ({ request }) => {
    const { username } = await request.json();
    return HttpResponse.json(
      { message: `Welcome, ${username}!` },
      { status: 200 }
    );
  }),
];
