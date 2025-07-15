export function FieldError({
  name,
  errors,
}: {
  name: string;
  errors: Record<string, string[]>;
}) {
  const messages = errors?.[name];
  if (!messages || messages.length === 0) return null;

  return <p className="mt-1 text-sm text-red-500">{messages.join(", ")}</p>;
}
