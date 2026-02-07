"use client";

import { supabase } from "@/lib/supabase";

export default function BookPage({ parkingId }: { parkingId: string }) {
  const createBooking = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first");
      return;
    }

    const { error } = await supabase.from("bookings").insert({
      user_id: user.id,
      parking_id: parkingId,
      start_time: new Date(),
      end_time: new Date(Date.now() + 60 * 60 * 1000),
      total_amount: 50,
    });

    if (error) alert(error.message);
    else alert("Booking successful!");
  };

  return <button onClick={createBooking}>Book Parking</button>;
}
