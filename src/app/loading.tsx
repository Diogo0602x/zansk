import { Container, Stack, Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <Container className="py-12 lg:py-24">
      <Stack spacing="xl">
        <Skeleton variant="text" height={60} className="w-3/4 mx-auto" />
        <Skeleton variant="text" height={30} className="w-1/2 mx-auto" />
        <Stack spacing="md" className="mt-8">
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="rectangular" height={200} />
        </Stack>
      </Stack>
    </Container>
  );
}
