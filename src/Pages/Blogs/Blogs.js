import React from "react";
import question from "../../images/images/question.png";

const Blogs = () => {
  return (
    <div>
      {/* Banner Start */}
      <div
        className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/hRgYzqS/hosein-zanbori-wvb-OWc-IDu-Yg-unsplash-1.jpg')",
          height: "500px",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-white">
              <h1 className="font-semibold text-6xl mb-4 uppercase">Blogs</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
      <div className="my-10">
        <h2 className="text-4xl font-semibold text-center">Question Answers</h2>
        <div className="container mx-auto md:px-20 px-0">
          <div className="grid grid-1 md:grid-cols-2 items-center gap-6">
            <div className="w-full">
              <img src={question} alt="" />
            </div>
            <div>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {/* Question#1 */}
                <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0" id="flush-headingOne">
                    <button
                      className="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Write Down differences between JavaScript and NodeJS.
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse border-0 collapse show"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-4 px-5">
                      <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full">
                                <thead className="border-b">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                    >
                                      JavaScript
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                    >
                                      NodeJS
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      A programming language that is used for
                                      writing scripts on the website
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      A Javascript runtime environment
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Can only be run in the browsers
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Can run Javascript outside the browser
                                      with the help of NodeJS
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Basically used on the client-side
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Mostly used on the server-side
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Capable enough to add HTML and play with
                                      the DOM
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Does not have capability to add HTML tags
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Can run in any browser engine as like JS
                                      core in safari and Spidermonkey in Firefox
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      V8 is the Javascript engine inside of
                                      node.js that parses and runs Javascript
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Question#2 */}
                <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0" id="flush-headingTwo">
                    <button
                      className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      When should you use NodeJS and when should you use
                      MongoDB?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-4 px-5">
                      <p className="text-justify">
                        <span className="font-medium">When to use NodeJS:</span>{" "}
                        NodeJS is an open source, cross-platform runtime
                        environment for developing server-side and networking
                        applications. NodeJS applications are written in
                        JavaScript, and can be run within the Node.js runtime on
                        OS X, Microsoft Windows, and Linux. Different business
                        giants as eBay, PayPal, and Netflix now use it for
                        building their platforms. For one, Node.js is regarded
                        as the native land of the Internet of Things, IoT. IoT
                        devices like fitness trackers and thermostats can all be
                        programmed with NodeJS. So we can say that NodeJS is
                        good for Data Streaming, Collaborative Tools and
                        Hardware Programming. On the other hand, it is not good
                        for CPU-Heavy Server-Side Computation and CRUD Apps.
                      </p>
                      <p className="text-justify mt-2">
                        <span className="font-medium">
                          When to use MongoDB:
                        </span>{" "}
                        MongoDB is an open-source document database built on a
                        horizontal scale-out architecture that uses a flexible
                        schema for storing data. Instead of storing data in
                        tables of rows or columns like SQL databases, each
                        record in a MongoDB database is a document described in
                        BSON, a binary representation of the data. Applications
                        can then retrieve this information in a JSON format. It
                        has found a home in many different businesses and
                        functions because it solves long-standing problems in
                        data management and software development. We can use
                        MongoDB for Integrating large amounts of diverse data,
                        Describing complex data structures that evolve,
                        Delivering data in high-performance applications,
                        Supporting hybrid and multi-cloud applications and
                        Supporting agile development and collaboration.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Question#3 */}
                <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0" id="flush-headingThree">
                    <button
                      className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Write Down differences between SQL and NoSQL databases.
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse border-0 collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-4 px-5">
                      <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full">
                                <thead className="border-b">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                    >
                                      SQL
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                    >
                                      NoSQL
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Primarily called RDBMS or Relational
                                      Databases
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Non-relational or Distributed Database
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Databases are table based databases
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Databases can be document based, key-value
                                      pairs, graph databases
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Databases are vertically scalable
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Databases are horizontally scalable
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Databases have a predefined schema
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Databases use dynamic schema for
                                      unstructured data
                                    </td>
                                  </tr>
                                  <tr className="bg-white border-b">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Requires specialized DB hardware for
                                      better performance
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                      Uses commodity hardware
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Question#4 */}
                <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0" id="flush-headingFour">
                    <button
                      className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      What is the purpose of jwt and how does it work?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-4 px-5">
                      <p className="text-justify">
                        <span className="font-medium">Purpose of JWT:</span>{" "}
                        Instead of storing information on the server after
                        authentication, JWT creates a JSON web token and
                        encodes, sterilizes, and adds a signature with a secret
                        key that cannot be tampered with. This key is then sent
                        back to the browser. Each time a request is sent, it
                        verifies and sends the response back.
                        <br />
                        JWT also allows us to use the same JSON Web Token in
                        multiple servers that you can run without running into
                        problems where one server has a certain session, and the
                        other server doesn't.
                      </p>
                      <p className="text-justify mt-2">
                        <span className="font-medium">How JWT Works:</span>{" "}
                        First of all, a user logs in to an application with a
                        username and password, or otherwise proves his/her
                        identity. Then the server confirms her identity and
                        sends back an access token containing a reference to
                        his/her identity. After that, the client then includes
                        this access token with every request to the server. For
                        protected routes, REST API authentication middleware
                        asserts the presence of a valid access token. The server
                        can further use the identity asserted by the validated
                        token to implement more granular permissions, such as
                        acting on resources belonging to that particular user.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
