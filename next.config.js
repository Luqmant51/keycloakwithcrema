/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_INITIAL_URL: "/sample/page-1",
        NEXT_PUBLIC_STATE_TYPE: "context",
        NEXT_PUBLIC_FILESTACK_KEY: "Ach6MsgoQHGK6tCaq5uJgz",
        NEXT_PUBLIC_LAYOUT: "default",
        NEXT_PUBLIC_MULTILINGUAL: "true",
        NEXT_PUBLIC_PRIMARY_COLOR: "#0A8FDC",
        NEXT_PUBLIC_SECONDARY_COLOR: "#F04F47",
        NEXT_PUBLIC_THEME_MODE: "light",
        NEXT_PUBLIC_NAV_STYLE: "default",
        NEXT_PUBLIC_LAYOUT_TYPE: "full-width",
        KEYCLOAK_CLIENT_ID: "nextjs",
        KEYCLOAK_CLIENT_SECRET: "VT60v6iBsbmDn7JTcYee4Hzr15edXcrL",
        KEYCLOAK_ISSUER: "https://identity.teamfullstack.io/realms/luqman",
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "Je4xGnG76YxQEo6TUmZ18Nkrx3QL0N3vcQhgPghsvdU:",
        KEYCLOAK_REALM: "luqman",
        REFRESH_TOKEN_URL: "https://identity.teamfullstack.io/realms/luqman/protocol/openid-connect/token",
        END_SESSION_URL: "https://identity.teamfullstack.io/realms/luqman/protocol/openid-connect/logout",
    },
}

module.exports = nextConfig
