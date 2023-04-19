import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>EZKL - Verifiable Private Inference</title>
        <meta
          name="description"
          content="EZKL is a project that helps developers perform verifiable private inference on deep learning models and other computational graphs using zk-SNARKs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">
              <span className="bg-blue-500 px-2 py-1 rounded-md">EZKL</span>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to EZKL</h1>
          <p className="text-xl text-gray-600">
            Perform verifiable private inference on deep learning models and other
            computational graphs using zk-SNARKs
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="prose lg:prose-xl">
            <h2>Mission</h2>
            <p>
              Our mission is to empower developers with the tools they need to
              easily and efficiently prove and verify the execution of AI models
              using zero-knowledge proofs. Our aim is not to build any
              applications ourselves, but stimulate the creation of applications
              in the community.
            </p>
          </div>

          <div className="prose lg:prose-xl">
            <h2>Solution</h2>
            <p>
              EZKL addresses the need for easy-to-use tools for performing
              inference on deep learning models and other computational graphs
              using zk-SNARKs. With EZKL, developers can define a computational
              graph, export the graph of operations, and generate a ZK-SNARK
              circuit for secure and private computation of various ML and
              related tasks.
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Why EZKL?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Advance zero-knowledge tools and libraries</li>
            <li>Improve user experience and developer experience</li>
            <li>Enable technical implementations of zero-knowledge proofs and circuits</li>
            <li>Contribute to the growth of the ZK ecosystem</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-200 mt-16">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-700 text-sm">
              {/* Supported by{' '}
              <a
                href="https://gitcoin.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text
                -blue-600 hover:text-blue-800"
                >
                Gitcoin
                </a> */}
                </div>
                <div>
                {/* <img
                             src="/gitcoin.svg"
                             alt="Gitcoin Logo"
                             className="h-8 w-auto"
                           /> */}
                </div>
                </div>
                </div>
                </footer>
                </div>
                );
                }
