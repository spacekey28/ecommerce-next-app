import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <p>Welcome {name}! Testing...</p>
  );
}

export default Name;