import React from "react";

const ReferEarn = () => {

return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 p-6">

<div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-10 space-y-6">

<h1 className="text-3xl font-bold text-center bg-gradient-to-r from-[#FFD42A] to-[#FFC107] bg-clip-text text-transparent">
Refer and Earn
</h1>

<p className="text-gray-600 text-lg leading-relaxed text-center">
You must have heard “If you do good work, you get rewarded”. Now is the
time to actually realise this. If you want to make a positive contribution
to someone’s life and you feel that the person will stand to gain from
association with TTT, you may refer the details of that person and in
turn, as a mark of gratitude TTT would ensure that you earn for this
good act.
</p>

{/* Refer Code Section */}

<div className="bg-gradient-to-r from-[#FFD42A] to-[#FFC107] rounded-2xl p-6 text-center shadow-md">

<p className="text-lg font-semibold text-gray-900">
Your Refer Code
</p>

<div className="mt-3 text-2xl font-bold tracking-widest bg-white px-6 py-3 rounded-xl inline-block shadow">
TTT-REF-1234
</div>

<p className="text-sm text-gray-800 mt-3">
Share this code with your friends and earn rewards.
</p>

</div>

{/* Contact Section */}

<div className="bg-gray-50 rounded-2xl p-6 text-center space-y-3 border">

<p className="text-lg font-semibold text-gray-800">
Contact Us
</p>

<p className="text-gray-700">
📞 <span className="font-medium">Call us on:</span> +91 XXXXX XXXXX
</p>

<p className="text-gray-700">
✉️ <span className="font-medium">Mail us at:</span> contact@ttt.org
</p>

<p className="text-gray-600 text-sm">
Our team will get back to you shortly.
</p>

</div>

</div>

</div>

);

};

export default ReferEarn;