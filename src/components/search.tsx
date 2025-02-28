'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Star } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query) {
      router.push(`/search/${query}`);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="pl-10"
        />
      </div>
      <div className="flex flex-wrap gap-2 shrink-0">
        <Link href="/favourites">
          <Button variant="outline" size="icon">
            <Star className="h-4 w-4"/>
          </Button>
        </Link>
        <Button variant="outline" size="icon" onClick={handleSearch}>
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
