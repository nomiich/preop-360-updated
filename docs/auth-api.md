## Auth API Contracts

All endpoints return and accept JSON. Base path: `/api/auth`.

### POST /api/auth/sign-up

**Request body**

```json
{
  "email": "user@example.com",
  "password": "strong-password",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response (200)**

```json
{
  "user": {
    "id": "uuid-from-supabase-auth",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "avatarUrl": null,
    "isAdmin": false
  },
  "accessToken": "jwt-access-token",
  "refreshToken": "jwt-refresh-token"
}
```

### POST /api/auth/sign-in

**Request body**

```json
{
  "email": "user@example.com",
  "password": "strong-password"
}
```

**Response (200)**

Same shape as `POST /api/auth/sign-up`.

### POST /api/auth/sign-in/google

For clients (web or React Native) that complete the Google OAuth flow and receive an ID token or access token.

**Request body**

```json
{
  "idToken": "google-id-token"
}
```

or

```json
{
  "accessToken": "google-access-token"
}
```

**Response (200)**

Same shape as `POST /api/auth/sign-up`.

### POST /api/auth/sign-in/apple

For clients that complete the Apple Sign-In flow and receive an ID token.

**Request body**

```json
{
  "idToken": "apple-id-token"
}
```

**Response (200)**

Same shape as `POST /api/auth/sign-up`.

### GET /api/auth/me

Reads the current authenticated user based on Supabase auth cookies or `Authorization` header (when using Supabase helpers).

**Response (200)**

```json
{
  "user": {
    "id": "uuid-from-supabase-auth",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "avatarUrl": null,
    "isAdmin": false
  }
}
```

**Response (401)**

```json
{ "error": "Unauthorized" }
```

## Example usage from React Native

```ts
const BASE_URL = "https://your-domain.com";

export async function signIn(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/api/auth/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Failed to sign in");
  }

  const data = await res.json();

  // Store tokens securely (e.g. Expo SecureStore or Keychain)
  // data.accessToken, data.refreshToken

  return data.user;
}
```

