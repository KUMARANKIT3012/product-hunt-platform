import { auth } from "@/auth";
import { redirect } from "next/navigation";

const PagesLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const authenticatedUser = await auth();

  if (!authenticatedUser) {
    redirect('/');
  }

  return <>{children}</>;
};

export default PagesLayout;