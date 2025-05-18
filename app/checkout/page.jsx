"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";

const CheckoutPage = () => {
  const { cart, total, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [recipientInfo, setRecipientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    country: "Australia",
  });

  const handleRecipientChange = (e) => {
    const { name, value } = e.target;
    setRecipientInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    
    // Prepare email content
    const emailSubject = "New Order Request from Baskets Bliss";
    const emailBody = `
Order Details:
${cart.map(item => `
- ${item.name} x ${item.quantity} (AUD $${item.price * item.quantity})
`).join('')}

Total: AUD $${total}

Recipient Information:
Name: ${recipientInfo.name}
Email: ${recipientInfo.email}
Phone: ${recipientInfo.phone}
Address: ${recipientInfo.address}
City: ${recipientInfo.city}
State: ${recipientInfo.state}
Postcode: ${recipientInfo.postcode}
Country: ${recipientInfo.country}
    `;

    // Create mailto link
    const mailtoLink = `mailto:info@basketsbliss.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Clear cart after sending
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="mb-8">Add some items to your cart to continue shopping.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Forms */}
        <div className="flex-grow space-y-6">
          {/* Recipient Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Recipient Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={recipientInfo.name}
                    onChange={handleRecipientChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={recipientInfo.email}
                    onChange={handleRecipientChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={recipientInfo.phone}
                    onChange={handleRecipientChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={recipientInfo.address}
                    onChange={handleRecipientChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={recipientInfo.city}
                    onChange={handleRecipientChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={recipientInfo.state}
                    onChange={handleRecipientChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Postcode</label>
                  <input
                    type="text"
                    name="postcode"
                    value={recipientInfo.postcode}
                    onChange={handleRecipientChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={recipientInfo.country}
                    onChange={handleRecipientChange}
                    className="w-full p-2 border rounded-lg"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Payment Form */}
          <form onSubmit={handlePayment} className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">
                Our online payment system is currently being updated
                </p>
                <p className="text-gray-600 mb-4">
                  We're currently updating our payment system. To place your order, please click the button below to send us your cart selection via email. Our team will contact you shortly to arrange payment and complete your order.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Send Order Request
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-96">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>AUD ${item.price * item.quantity}</span>
                </div>
              ))}
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>AUD ${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 