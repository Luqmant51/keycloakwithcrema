import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";

export default async function session(req: any, res: any) {
    const session = await getServerSession(req, res, authOptions);
    console.log(session);

    if (session) {
        // Return the session if it exists
        res.status(200).json(session);
    } else {
        // Handle cases where there is no session
        res.status(401).json({ error: "No active session found" });
    }
}
