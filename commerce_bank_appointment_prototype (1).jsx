import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  User,
  Phone,
  Mail,
  Building2,
  CheckCircle2,
} from "lucide-react";

function AppointmentPage() {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isBooked, setIsBooked] = useState<boolean>(false);

  const isFormComplete =
    date !== "" &&
    time !== "" &&
    topic !== "" &&
    location !== "" &&
    name !== "" &&
    email !== "" &&
    phone !== "";

  const resetForm = () => {
    setDate("");
    setTime("");
    setTopic("");
    setLocation("");
    setName("");
    setEmail("");
    setPhone("");
    setIsBooked(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="bg-green-700 text-white p-6">
          <div className="flex items-center gap-3">
            <Building2 size={28} />
            <div>
              <h1 className="text-xl font-semibold">Commerce Bank</h1>
              <p className="text-sm opacity-90">
                Schedule an In-Branch Appointment
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="px-8 pt-6">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2
              size={16}
              className={isBooked ? "text-green-600" : "text-gray-400"}
            />
            <span
              className={
                isBooked
                  ? "text-green-700 font-medium"
                  : "text-gray-500"
              }
            >
              {isBooked
                ? "Appointment Confirmed"
                : "Complete the form below"}
            </span>
          </div>
        </div>

        <div className="p-8 space-y-6">
          {/* Location */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <MapPin size={16} /> Bank Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={isBooked}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Select a location</option>
              <option value="downtown">Downtown Branch</option>
              <option value="north">Northside Branch</option>
              <option value="south">Southside Branch</option>
              <option value="west">West End Branch</option>
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <CalendarDays size={16} /> Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                disabled={isBooked}
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <CalendarDays size={16} /> Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                disabled={isBooked}
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          {/* Topic */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Appointment Topic
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={isBooked}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Select a topic</option>
              <option value="checking">Checking Account</option>
              <option value="savings">Savings Account</option>
              <option value="loan">Loans</option>
              <option value="mortgage">Mortgage</option>
              <option value="investment">Investments</option>
            </select>
          </div>

          {/* Personal Info */}
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <User size={16} /> Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isBooked}
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Mail size={16} /> Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isBooked}
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Phone size={16} /> Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isBooked}
                className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          {!isBooked ? (
            <button
              onClick={() => setIsBooked(true)}
              disabled={!isFormComplete}
              className={`w-full rounded-xl py-3 font-medium transition text-white ${
                isFormComplete
                  ? "bg-green-700 hover:bg-green-800"
                  : "bg-green-300 cursor-not-allowed"
              }`}
            >
              Book Appointment
            </button>
          ) : (
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 text-sm">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 size={16} /> Appointment Confirmed
                </p>
                <p>{name}</p>
                <p>
                  {location} | {date} at {time}
                </p>
                <p>Topic: {topic}</p>
              </div>

              <button
                onClick={() => setIsBooked(false)}
                className="w-full bg-yellow-500 text-white rounded-xl py-3 font-medium hover:bg-yellow-600 transition"
              >
                Edit Appointment
              </button>

              <button
                onClick={resetForm}
                className="w-full bg-red-600 text-white rounded-xl py-3 font-medium hover:bg-red-700 transition"
              >
                Cancel Appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppointmentPage />} />
      </Routes>
    </Router>
  );
}
