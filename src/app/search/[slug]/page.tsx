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

export default async function search({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const key = process.env.TMDB_KEY;
  
  if (!slug) return notFound();

  const result = await fetch(`https://api.themoviedb.org/3/search/movie?query=${slug}&api_key=${key}`);
  
  if (!result.ok) return notFound();

  const data = await result.json();
  const searchResults = data.results;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
      {searchResults.map((_result: any) => (
        <Card key={_result.id} className="rounded-lg border bg-card overflow-hidden flex flex-col justify-between">
          <CardHeader className="flex">
            <Image
              src={`https://image.tmdb.org/t/p/w500${_result.poster_path}`}
              alt={_result.title}
              width={300}
              height={450}
              className="object-cover w-full h-full"
            />
            <h2 className="text-lg font-bold">{_result.title}</h2>
          </CardHeader>
          <CardFooter>
            <p className="text-accent">{_result.release_date}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
