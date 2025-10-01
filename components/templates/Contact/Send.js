import React, { useState } from "react";

function Send() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const send = async (e) => {
    e.preventDefault();
    const res =await fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    if (res.status == 200 || 201) {
      setName("");
      setMessage("");
      setSubject("");
      setEmail("");
    }
  };
  return (
    <div className="px-28 py-10">
      <form className="flex flex-col gap-y-4" onSubmit={(e) => send(e)}>
        <input type="text" placeholder="Your Name" className="border p-1 " value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Your Email" className="border p-1"  value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="Subject" className="border p-1"  value={subject} onChange={(e) => setSubject(e.target.value)} />
        <textarea placeholder="Message" className="border p-1 "  value={message} onChange={(e) => setMessage(e.target.value)} />
        <button
          type="submit"
          className="cursor-pointer bg-amber-800 p-2 text-white "
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Send;
