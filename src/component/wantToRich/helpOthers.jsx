import React from "react";

const HelpOthers = () => {

return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 p-6">

<div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-10 space-y-6">

<h1 className="text-3xl font-bold text-center bg-gradient-to-r from-[#FFD42A] to-[#FFC107] bg-clip-text text-transparent">
Serve With TTT
</h1>

<p className="text-gray-600 text-lg leading-relaxed text-center">
Best form of satisfaction comes from selfless service. TTT not only
believes firmly in this but also wants to provide a platform for
others to achieve this. If you want to join us in our mission to
serve society, contribute to nation building and provide a better
and secure future to our next generations, you can join us in our
various not-for-profit, charitable and philanthropic activities.
</p>

{/* Contact Section */}

<div className="bg-gray-50 rounded-2xl p-6 text-center space-y-3 border">

<p className="text-lg font-semibold text-gray-800">
Contact Us
</p>

<p className="text-gray-700">
📞 <span className="font-medium">Call us on:</span> +91 XXXXX XXXXX
</p>

<p className="text-gray-700">
✉️ <span className="font-medium">Mail us at:</span> help@ttt.org
</p>

<p className="text-gray-600 text-sm">
Our team will get back to you shortly.
</p>

</div>

</div>

</div>

);

};

export default HelpOthers;