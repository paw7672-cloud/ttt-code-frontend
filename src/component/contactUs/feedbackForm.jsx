import React, { useState } from "react";

const FeedbackForm = () => {
  const [category, setCategory] = useState("");

  const inputClass =
    "w-full p-3 pl-10 bg-white/80 backdrop-blur border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all";

  const labelClass = "block mb-1 text-sm font-semibold text-gray-700";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 p-6">

      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Feedback & Registration
          </h2>
          <p className="text-blue-100 text-sm mt-2">
            Please fill the form carefully
          </p>
        </div>

        <form className="p-8 space-y-8">

          {/* Category Selection */}
          <div>
            <span className={labelClass}>Select Category *</span>

            <div className="grid md:grid-cols-4 gap-4 mt-3">

              {[
                "Student",
                "Parent/Guardian",
                "School/Educational Institution",
                "Others",
              ].map((type) => (
                <label
                  key={type}
                  className={`cursor-pointer rounded-xl border p-4 text-center font-medium transition-all duration-300 transform
                  ${
                    category === type
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent shadow-lg scale-105"
                      : "bg-white border-gray-200 hover:border-blue-400 hover:shadow-md"
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    className="hidden"
                    value={type}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Dynamic Fields */}
          <div className="space-y-6 transition-all duration-300">

            {category === "Student" && (
              <div className="grid md:grid-cols-2 gap-5">

                <div className="md:col-span-2">
                  <label className={labelClass}>Student Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">👤</span>
                    <input type="text" className={inputClass} />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass}>Parent Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">👨‍👩‍👧</span>
                    <input type="text" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Student Mobile</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">📱</span>
                    <input type="tel" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Parent Mobile</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">📞</span>
                    <input type="tel" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Student Email</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">✉️</span>
                    <input type="email" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Parent Email</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">📧</span>
                    <input type="email" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Age</label>
                  <input type="number" className={inputClass.replace("pl-10","")} />
                </div>

                <div>
                  <label className={labelClass}>Class</label>
                  <input type="text" className={inputClass.replace("pl-10","")} />
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass}>School / Institution</label>
                  <input type="text" className={inputClass.replace("pl-10","")} />
                </div>

              </div>
            )}

          </div>

          {/* Address */}
          {category && (
            <div className="border-t pt-8 space-y-6">

              <div className="grid md:grid-cols-3 gap-4">

                <div>
                  <label className={labelClass}>City</label>
                  <input type="text" className={inputClass.replace("pl-10","")} />
                </div>

                <div>
                  <label className={labelClass}>State</label>
                  <input type="text" className={inputClass.replace("pl-10","")} />
                </div>

                <div>
                  <label className={labelClass}>Pin Code</label>
                  <input type="text" className={inputClass.replace("pl-10","")} />
                </div>

              </div>

              <div>
                <label className={labelClass}>Feedback</label>
                <textarea
                  rows="4"
                  className={inputClass.replace("pl-10","")}
                  placeholder="Share your thoughts..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:scale-[1.03] transition-all shadow-lg"
              >
                Submit Feedback
              </button>

            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;