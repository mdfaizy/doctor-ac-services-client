import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({
  isOpen,
  onClose,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    area: "",
    address: "",
    service: "",
    acType: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      console.log(formData);

      // Google Sheet API yahan call karenge

      alert("Booking Submitted Successfully");

      setFormData({
        name: "",
        phone: "",
        city: "",
        area: "",
        address: "",
        service: "",
        acType: "",
        date: "",
        time: "",
        message: "",
      });

      onClose();
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white p-6 flex justify-between items-center">

          <div>
            <h2 className="text-3xl font-bold">
              Book AC Service
            </h2>

            <p className="text-white/90 mt-1">
              Same Day AC Repair & Installation
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl hover:rotate-90 transition"
          >
            <FaTimes />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="font-semibold">
                Full Name
              </label>

              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full mt-2 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold">
                Phone Number
              </label>

              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full mt-2 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="font-semibold">
                City
              </label>

              <input
                required
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Patna"
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="font-semibold">
                Area / Locality
              </label>

              <input
                required
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Kankarbagh"
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

          </div>

          <div>

            <label className="font-semibold">
              Full Address
            </label>

            <textarea
              required
              rows={3}
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Complete Address"
              className="w-full mt-2 border rounded-xl p-3"
            />

          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <div>

              <label className="font-semibold">
                Service
              </label>

              <select
                required
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              >
                <option value="">
                  Select Service
                </option>

                <option>
                  AC Repair
                </option>

                <option>
                  AC Installation
                </option>

                <option>
                  Gas Refilling
                </option>

                <option>
                  AC Maintenance
                </option>

                <option>
                  AC Cleaning
                </option>

              </select>

            </div>

            <div>

              <label className="font-semibold">
                AC Type
              </label>

              <select
                required
                name="acType"
                value={formData.acType}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              >
                <option value="">
                  Select
                </option>

                <option>
                  Split AC
                </option>

                <option>
                  Window AC
                </option>

                <option>
                  Cassette AC
                </option>

              </select>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <div>

              <label className="font-semibold">
                Preferred Date
              </label>

              <input
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Preferred Time
              </label>

              <input
                required
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

          </div>

          <div>

            <label className="font-semibold">
              Problem Description
            </label>

            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your problem..."
              className="w-full mt-2 border rounded-xl p-3"
            />

          </div>

          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-4 rounded-xl text-lg font-bold hover:opacity-90 transition"
          >
            {loading
              ? "Submitting..."
              : "Book Service"}
          </button>

        </form>

      </div>
    </div>
  );
}