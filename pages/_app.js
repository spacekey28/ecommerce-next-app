import Link from "next/link";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Link href="/">Home</Link>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;