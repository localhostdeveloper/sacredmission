import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const amount = parseInt(searchParams.get("amount") ?? "5000");
  const frequency = searchParams.get("frequency") ?? "once";

  try {
    if (frequency === "monthly") {
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: "Sacred Cipher Mission Monthly Donation" },
              recurring: { interval: "month" },
              unit_amount: amount,
            },
            quantity: 1,
          },
        ],
        success_url: `${process.env.NEXT_PUBLIC_URL}/donate/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/donate`,
      });
      return NextResponse.redirect(session.url!);
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Sacred Cipher Mission Donation" },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_URL}/donate/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/donate`,
    });
    return NextResponse.redirect(session.url!);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
