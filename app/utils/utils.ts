import { useRouter } from "next/navigation";

export function generateUniqueId(): string {
  return "_" + Math.random().toString(36);
}

export function useNavigateToWelcomePage() {
  const router = useRouter();
  return () => router.push("/");
}
