import React, { useState, useEffect } from "react";
import { SiGreasyfork } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import wayConcept from "../../assets/way-concept-illustration.png"; // Import the image
import Footer from "../../components/HomePageCompo/Footer";

const DeliverypartnerLoginRegister = () => {
  const navigate = useNavigate();

  const [drivingLicenceNo, setDrivingLicenceNo] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [password, setPassword] = useState("");
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3000/auth/delivery/register", {
        drivingLicenceNo,
        ownerName,
        password,
        phone,
        email,
        city,
        address,
        countryName,
        stateName,
      });

      if (response.data.status) {
        navigate("/DelLogin"); // Navigate to the delivery partner login page
      }

      console.log(response);
    } catch (err) {
      if (err.response) {
        console.error(err.response.data); // Log the error response data
        console.error(err.response.status); // Log the error status
        setError(err.response.data.message); // Set error state with server error message
      } else {
        console.error(err); // Log other potential errors
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className={`h-20 w-full fixed z-50 ${
          isScrolled ? "bg-white shadow-md" : "bg-white shadow-md"
        } top-0`}
      >
        <div className="p-5 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="font-poppins md:text-3xl font-extrabold tracking-wide flex">
              <span className="text-yellow-400 flex justify-center items-center">
                <span>fo</span>
                <SiGreasyfork className="rotate-90 mt-1 mr-[1px]" size={20} />
                <span>die</span>
              </span>
              <span>Buddy</span>
            </h1>
          </div>
          <nav className="flex gap-x-7 items-center">
            <ul className="hidden md:flex gap-x-7 justify-center items-center font-poppins text-[17px] font-medium tracking-[0.01em]">
              <li>
                <Link
                  to="/"
                  className={`text-gray-700 hover:text-gray-900 ${
                    isScrolled ? "bg-gray" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center mt-16 lg:flex-row lg:justify-center">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md m-4 lg:m-0 lg:ml-16 mt-4">
          <h2 className="text-2xl font-bold mb-4">Partner with us</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleRegister}>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  id="drivingLicenceNo"
                  placeholder="Driving Licence No."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  value={drivingLicenceNo}
                  onChange={(e) => setDrivingLicenceNo(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  id="ownerName"
                  placeholder="UserName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  id="countryName"
                  placeholder="Country Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  id="stateName"
                  placeholder="State Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="phone"
                placeholder="Contact Number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email ID"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
            <div className="mt-4 flex justify-between items-center">
              <p>
                Have an Account?{" "}
                <Link className="text-blue-500" to="/DelLogin">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div
          className="hidden lg:flex flex-1 bg-cover bg-center"
          style={{
            backgroundImage: `url(${wayConcept})`,
            minHeight: "calc(100vh - 80px)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DeliverypartnerLoginRegister;
