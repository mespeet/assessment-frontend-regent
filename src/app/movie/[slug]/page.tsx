/* eslint-disable @typescript-eslint/no-explicit-any */
// imports
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"


// types
import { MovieType } from "@/types/movie"
type Genre = {
    id: number;
    name: string;
  };

export default async function Movie({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const key = process.env.TMDB_KEY;

  if (!slug) return notFound();

  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?&api_key=${key}`
  );

  if (!result.ok) return notFound();

  const data : MovieType = await result.json();

  return (
    <Card>
        <CardHeader className="flex flex-row gap-4">
            <Image
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                width={300}
                height={450}
                className="w-32 h-fit rounded-xl"
            />
            <div className="flex flex-col gap-2">
                <Badge>{Math.round(data.vote_average * 10)}%</Badge>
                <CardTitle className="font-bold text-lg flex justify-between">{data.title}</CardTitle>
                <p className="font-light text-accent italic">{data.release_date}</p>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">Overview</h3>
                    <p className="text-accent">{data.overview}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">Genres</h3>
                    <div className="flex flex-wrap gap-2">
                        {data.genres.map((genre: Genre) => (
                            <Badge key={genre.id}>{genre.name}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </CardHeader>
    </Card>
  );
}
