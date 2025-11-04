'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SearchInput({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(formData: FormData) {
    const term = formData.get('query') as string;
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form action={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
      <div className="relative flex-grow">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          name="query"
          type="search"
          placeholder={placeholder}
          defaultValue={searchParams.get('query')?.toString()}
          className="pl-10"
          aria-label="Search threads"
        />
      </div>
      <Button type="submit" variant="secondary">Search</Button>
    </form>
  );
}
