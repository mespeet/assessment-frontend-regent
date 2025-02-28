/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Search({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const key = process.env.TMDB_KEY;
  
  if (!slug) return notFound();

//   let page: number = 1;
    const page: number = 1;

  const result = await fetch(`https://api.themoviedb.org/3/search/movie?query=${slug}&page=${page}&api_key=${key}`);
  
  if (!result.ok) return notFound();

  const data = await result.json();
  const searchResults = data.results;

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
      {searchResults.map((_result: any) => (
        <Link key={_result.id} href={`/movie/${_result.id}`} className="h-full hover:scale-105 transition-transform">
        <Card className="rounded-lg border h-full overflow-hidden flex flex-col justify-between">
          <CardHeader className="flex">
            <Image
              src={`https://image.tmdb.org/t/p/w500${_result.poster_path}`}
              alt={_result.title}
              width={300}
              height={450}
              className="object-cover w-full h-full rounded-lg"
            />
            <CardTitle className="text-lg font-bold">{_result.title}</CardTitle>
          </CardHeader>
          <CardFooter>
            <p className="text-accent">{_result.release_date}</p>
          </CardFooter>
        </Card>
        </Link>
      ))}
    </div>
    <div className="flex justify-center items-center gap-6">
      <Button><ChevronLeft /></Button>
      <p>{page}</p>
      <Button><ChevronRight /></Button>
    </div>
    </>
  );
}
