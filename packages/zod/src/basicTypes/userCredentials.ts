import z from "zod";
import { userZodCredentials } from "../zodTypes/userZodCredentials";

export type userCredentials = z.infer<typeof userZodCredentials>