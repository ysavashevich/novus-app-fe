import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function useReduxError(
  error: FetchBaseQueryError | SerializedError | undefined
): string | null {
  if (!error) return null;
  if ("status" in error) return (error.data as any)?.message || "";
  return error.message || "";
}
