import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Job Listings & Vacancies",
  description:
    "Explore verified job vacancies and career opportunities across Germany and Europe with Mattu Bridge Consultancy.",
};

export default function JobListingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
