import Search from "@/app/components/Search";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

export default function page() {
  return (
    <Suspense>
      <Search></Search>
    </Suspense>
  );
}
