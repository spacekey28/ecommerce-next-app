import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <p>Welcome {name}</p>
  );
}

export default Name;