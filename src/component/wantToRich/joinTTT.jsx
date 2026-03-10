import React from "react";

const JoinTTT = () => {

const inputClass =
"w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFC107] outline-none";

const labelClass = "block mb-1 text-sm font-semibold text-gray-700";

return (

<div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 flex items-center justify-center p-6">

<div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-10 space-y-6">

<h1 className="text-3xl font-bold text-center bg-gradient-to-r from-[#FFD42A] to-[#FFC107] bg-clip-text text-transparent">
Become a part of Team TTT
</h1>

<p className="text-gray-600 text-lg leading-relaxed text-center">
If you feel excited about the concept of TTT and believe that TTT is contributing
to the cause of nation building and making this world a better place,
we would love to have you on-board as a part of Team TTT.
Our power and potential get multiplied many times when we work together.
</p>

{/* FORM DIRECTLY VISIBLE */}

<div className="space-y-6 border-t pt-6">

<div>
<label className={labelClass}>Name *</label>
<input type="text" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Qualification (please provide all details) *</label>
<textarea rows="3" className={inputClass}></textarea>
</div>

<div>
<label className={labelClass}>Work Experience *</label>
<textarea rows="3" className={inputClass}></textarea>
</div>

<div>
<label className={labelClass}>Areas of Interest *</label>
<input type="text" className={inputClass}/>
</div>

<div>
<label className={labelClass}>What role you see for yourself in TTT *</label>
<textarea rows="3" className={inputClass}></textarea>
</div>

<div>
<label className={labelClass}>Mobile Number *</label>
<input type="tel" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Email ID</label>
<input type="email" className={inputClass}/>
</div>

<div className="grid md:grid-cols-3 gap-5">

<div>
<label className={labelClass}>City *</label>
<input type="text" className={inputClass}/>
</div>

<div>
<label className={labelClass}>State / UT *</label>
<input type="text" className={inputClass}/>
</div>

<div>
<label className={labelClass}>Pin Code</label>
<input type="number" className={inputClass}/>
</div>

</div>

<button className="w-full py-3 rounded-xl font-semibold text-gray-900 bg-gradient-to-r from-[#FFD42A] to-[#FFC107] shadow-lg hover:scale-[1.02] transition">
Submit Application
</button>

</div>

</div>

</div>

);
};

export default JoinTTT;