import React from 'react';
const steps = [
  { no: "01", title: "Create an Account", text: "Register for free with your email or Google account." },
  { no: "02", title: "Find Your Book", text: "Search by title or filter by Story, Tech, and Science." },
  { no: "03", title: "Borrow Instantly", text: "Click 'Borrow This Book' and it's yours." },
];

const HowItWorks = () => {
    return (
        <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Borrow a Book in 3 Easy Steps</h2>
        <p className="mt-2 text-base-content/70">No queues, no paperwork. Just pick, borrow, and read.</p>
        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.no} className="card bg-base-100 shadow-md hover:shadow-xl transition">
              <div className="card-body items-center">
                <span className="text-5xl font-extrabold text-primary">{s.no}</span>
                <h3 className="card-title">{s.title}</h3>
                <p className="text-base-content/70">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HowItWorks;