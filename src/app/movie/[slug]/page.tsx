/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Movie({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const key = process.env.TMDB_KEY;

  if (!slug) return notFound();

  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?&api_key=${key}`
  );

  if (!result.ok) return notFound();

  const data = await result.json();

  return (
    <Card>
        <CardHeader className="flex flex-row gap-4">
            <Image
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                width={300}
                height={450}
                className="w-32"
            />
            <div className="flex flex-col">
                <h2 className="font-bold text-lg">{data.title}</h2>
                <p className="text-accent">{data.overview}</p>
            </div>
        </CardHeader>
    </Card>
  );
}
