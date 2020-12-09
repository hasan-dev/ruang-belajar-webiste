import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";

export default function Landing() {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "95vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-top bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80)",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto" data-aos="zoom-in">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-gray-400 font-semibold text-2xl">
                    Wujudkan Mimpimu Bersama{" "}
                    <span className="text-green-500">Ruang Belajar</span>.
                  </h1>
                  <p className="text-lg text-gray-300">
                    Selamat datang di ruang belajar. Tempat untuk belajar dan
                    berlatih fokus untuk menggapai impian. Download brosur dan
                    mulai belajar sekarang
                  </p>
                  <a
                    className="bg-transparent hover:bg-green-500 text-green-500 font-bold hover:text-white px-4 py-2 border border-green-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
                    href="#hasan"
                  >
                    Download Brosor
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            ></svg>
          </div>
        </div>

        {/*About section*/}
        <section id="about" className="relative py-20 bg-gray-200 text-black">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div
                className="w-full md:w-4/12 ml-auto mr-auto px-4"
                data-aos="fade-right"
              >
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=632&q=80"
                />
              </div>
              <div
                className="w-full md:w-5/12 ml-auto mr-auto px-4"
                data-aos="fade-left"
              >
                <div className="md:pr-12">
                  <small className="text-green-500 font-bold">
                    {" "}
                    Tempat les kami
                  </small>
                  <h3 className="text-3xl font-semibold">
                    Bimbingan Belajar Terpercaya
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed">
                    Belajar dengan penerapan metode yang efektif. Latihan soal
                    lengkap dengan analisa terperinci oleh tutor. Siap hadapi
                    ujian.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-green-500">
                            <i className="fas fa-chalkboard-teacher fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-md">Tutor profesional</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-green-500">
                            <i className="fas fa-book fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-md">Materi pelajaaran lengkap</h4>
                        </div>
                      </div>
                    </li>{" "}
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-green-500">
                            <i className="fas fa-seedling fa-2x"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-md">
                            Tempat Belajar yang nyaman
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="pt-20 pb-48 bg-green-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Tutor Kami</h2>
                <p className="text-lg leading-relaxed m-4">
                  Tutor kamu disini mendedikasikan waktu dan usaha agar kamu
                  dapat meraih impian
                </p>
              </div>
            </div>
            {/* Trainer Cards Wrapper*/}
            <div className="flex flex-wrap">
              {/* Card 1 */}
              <div
                className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
                data-aos="flip-right"
              >
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-5-472x709.jpg")}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sania Larasati</h5>
                    <p className="mt-1 text-sm text-white uppercase font-semibold">
                      Tutor Matematika
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div
                className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
                data-aos="flip-right"
              >
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-6-472x709.jpg")}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Aldian</h5>
                    <p className="mt-1 text-sm text-white uppercase font-semibold">
                      Tutor Sains
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div
                className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
                data-aos="flip-right"
              >
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-7-472x709.jpg")}
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Naura Fitria</h5>
                    <p className="mt-1 text-sm text-white uppercase font-semibold">
                      Tutor IPS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Header Section */}
        <section className="pb-20 relative block bg-black text-white">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pt-20 pb-20">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white uppercase">
                  Hubungi Kami
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4">
                  Hubungi kami untuk bertanya apa saja, termasuk tentang
                  membership, ngobrol sama tutor atau yang lainnya.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contat Form */}
        <section className="relative block py-24 lg:pt-0 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div
                  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                  data-aos="fade-up-right"
                >
                  <div className="flex-auto p-5 lg:p-10 bg-green-500 text-white">
                    <h4 className="text-2xl font-semibold">
                      Mau kerja bareng kita?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4">
                      Lengkapi formulir ini dan kami akan menghubungi Anda
                      kembali dalam 24 jam.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Pesan
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Kirim Pesan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
