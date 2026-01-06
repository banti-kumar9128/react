import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Address = () => {
  const [address, setAddress] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });
  const { addresses, setAddresses, user, navigate } = useContext(AppContext);
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const submitHanlder = async (e) => {
    try {
      e.preventDefault();
      // Add address to local state
      const newAddress = {
        ...address,
        _id: Date.now().toString(), // Simple ID generation
      };
      setAddresses([...addresses, newAddress]);
      toast.success("Address saved successfully!");
      navigate("/cart");
    } catch (error) {
      toast.error("An error occurred");
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/cart");
    }
  }, []);
  return (
    <div className="mt-12 p-6">
      {/* Saved Addresses */}
      {addresses.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Saved Addresses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addresses.map((addr) => (
              <div
                key={addr._id}
                className="bg-white p-4 rounded-lg shadow border"
              >
                <p className="font-medium">
                  {addr.firstName} {addr.lastName}
                </p>
                <p className="text-sm text-gray-600">{addr.street}</p>
                <p className="text-sm text-gray-600">
                  {addr.city}, {addr.state} {addr.zipCode}
                </p>
                <p className="text-sm text-gray-600">{addr.country}</p>
                <p className="text-sm text-gray-600">{addr.phone}</p>
                <button
                  onClick={() => {
                    setAddresses(addresses.filter((a) => a._id !== addr._id));
                    toast.success("Address deleted");
                  }}
                  className="mt-2 text-red-500 text-sm hover:underline"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6 bg-gray-100 rounded-lg shadow-md">
        {/* Left Side: Address Fields */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {addresses.length > 0 ? "Add New Address" : "Address Details"}
          </h2>
          <form
            onSubmit={submitHanlder}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                value={address.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={address.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={address.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-600">Street</label>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">City</label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">State</label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">Zip Code</label>
              <input
                type="number"
                name="zipCode"
                value={address.zipCode}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">Country</label>
              <input
                type="text"
                name="country"
                value={address.country}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-600">Phone</label>
              <input
                type="number"
                name="phone"
                value={address.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md"
              >
                Save Address
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={assets.add_address_iamge}
            alt="Address Illustration"
            className="w-full max-w-xs rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
