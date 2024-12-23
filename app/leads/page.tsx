"use client";
import 'tailwindcss/tailwind.css';
import "../globals.css";
import React from "react";
import Presidents from '../../components/Presidents';
import Leads from '../../components/Leads';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-6 text-center text-3xl font-bold">
        Club Leadership
      </header>
      <main className="container mx-auto px-4">
        {/* Presidents Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Presidents</h2>
          <Presidents />
        </section>

        {/* Leads Section */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Leads</h2>
          <Leads />
        </section>
      </main>
    </div>
  );
};
